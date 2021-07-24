import React, { Component } from "react";
import getData from "../utils/getData";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/Document.scss";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }

  handleArchive = (e) => {
    const archivedEl = document.filter((el) => el.id === e.target.id)[0];
    archivedEl.archived = 1;
    console.log(archivedEl);
    useSendData(`${config.api}/api/document`, "PUT", archivedEl);
    setTimeout(this.props.history.push("/document"), 1000);
  };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/document`);
      this.setState({
        ...this.state,
        loading: false,
        data: response.data.body,
      });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  render() {
    return (
      <>
        <section className="document">
          <div className="document__table">
            <h4>TITULO</h4>
            <h4>TAMAÑO</h4>
            <h4>SUBIDO</h4>
            <h4>SUBIDO POR</h4>
            <h4>ARCHIVAR</h4>
          </div>
          {this.state.data.map((documentItem) => {
            if (!documentItem.archived) {
              return (
                <div className="document__table" key={documentItem.id}>
                  <a href={documentItem.document} target="_blank">
                    {documentItem.name}
                  </a>
                  <p>{documentItem.size}</p>
                  <p>{documentItem.date}</p>
                  <p>{documentItem.user}</p>
                  <button
                    type="button"
                    onClick={this.handleArchive}
                    id={documentItem.id}
                  >
                    Archivar
                  </button>
                </div>
              );
            }
          })}
        </section>
        {this.state.loading && <Loading />}
      </>
    );
  }
}

export default Document;
