import React, { Component } from "react";
import getData from "../utils/getData";
import sendData from "../utils/sendData";
import config from "../config";
import Loading from "../components/Loading";
import Header from "../components/Header";
import "../styles/pages/Document.scss";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: [],
      loading: false,
      error: null,
    };
  }

  handleArchive = async (e) => {
    const archivedEl = this.state.document.filter(
      (el) => el._id === e.target.id
    )[0];
    archivedEl.archived = true;
    await sendData(
      `${config.api}/api/document/${archivedEl._id}`,
      "PUT",
      archivedEl
    );
    this.props.history.push("/document");
  };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/document`);
      this.setState({
        ...this.state,
        loading: false,
        document: response.data.body,
      });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  render() {
    return (
      <>
        <Header page="Documentos" />
        <section className="document">
          <div className="document__table">
            <h4>TITULO</h4>
            <h4>TAMAÑO</h4>
            <h4>SUBIDO</h4>
            <h4>SUBIDO POR</h4>
            <h4>ARCHIVAR</h4>
          </div>
          {this.state.document.map((documentItem) => {
            if (!documentItem.archived) {
              console.log(documentItem);
              return (
                <div className="document__table" key={documentItem._id}>
                  <a href={documentItem.document} target="_blank">
                    {documentItem.name}
                  </a>
                  <p>{documentItem.size}</p>
                  <p>{documentItem.date}</p>
                  <p>{documentItem.user}</p>
                  <button
                    type="button"
                    onClick={this.handleArchive}
                    id={documentItem._id}
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
