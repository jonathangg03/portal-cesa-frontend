import React, { Component } from "react";
import getData from "../utils/getData";
import sendData from "../utils/sendData";
import DeleteModal from "../components/DeleteModal";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/Document.scss";

class DocumentArchived extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      loading: false,
      error: null,
      document: [],
    };
  }
  // const [openModal, setOpenModal] = useState(false);
  // const document = useGetData(`${config.api}/api/document`);
  // const history = useHistory("");

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
      this.setState({ ...this.state, error: error.message });
    }
  }

  handleArchive = async (e) => {
    try {
      const archivedEl = this.state.document.filter(
        (el) => el._id === e.target.id
      )[0];
      archivedEl.archived = false;
      await sendData(
        `${config.api}/api/document/${archivedEl._id}`,
        "PUT",
        archivedEl
      );
      this.setState({ ...this.state, loading: false });
      this.props.history.push("/document/archived");
    } catch (error) {
      this.setState({ ...this.state, loading: false });
      console.log(error.message);
    }
  };

  handleOpenModal = () => {
    this.setState({ ...this.state, openModal: !this.state.openModal });
  };

  handleDelete = async (e) => {
    this.setState({ ...this.state, loading: true });
    try {
      const archivedEl = this.state.document.filter(
        (el) => el._id === e.target.id
      )[0];
      await sendData(`${config.api}/api/document/${archivedEl._id}`, "DELETE");
      this.setState({ ...this.state, loading: false });
      this.handleOpenModal();
      location.reload();
      // this.props.history.push("/document/archived");
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <>
        <section className="document">
          <div className="document__table archived">
            <h4>TITULO</h4>
            <h4>TAMAÑO</h4>
            <h4>SUBIDO</h4>
            <h4>SUBIDO POR</h4>
            <h4>DESARCHIVAR</h4>
            <h4>ELIMINAR</h4>
          </div>
          {this.state.document.map((documentItem) => {
            if (documentItem.archived) {
              return (
                <div
                  className="document__table archived"
                  key={documentItem._id}
                >
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
                    Desarchivar
                  </button>
                  <button
                    type="button"
                    onClick={this.handleOpenModal}
                    className="delete_button"
                    id={documentItem._id}
                  >
                    Eliminar
                  </button>
                  <DeleteModal
                    id={documentItem._id}
                    opened={this.state.openModal}
                    handleCloseModal={this.handleOpenModal}
                    handleDelete={this.handleDelete}
                  />
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

export default DocumentArchived;
