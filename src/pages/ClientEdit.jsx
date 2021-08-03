import React, { Component } from "react";
import DeleteModal from "../components/DeleteModal";
import QuillEditor from "quill";
import getData from "../utils/getData";
import sendData from "../utils/sendData";
import config from "../config";
import Loading from "../components/Loading";
import Header from "../components/Header";
import "../styles/pages/New.scss";
import "../styles/components/EditorComponent.scss";

class ClientEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quill: "",
      name: "",
      loading: false,
      error: null,
      openModal: false,
    };
  }

  //getData();

  async componentDidMount() {
    this.setState({
      ...this.state,
      loading: true,
    });
    try {
      const response = await getData(
        `${config.api}/api/client/${this.props.match.params.id}`
      );

      let toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ];
      this.setState({
        ...this.state,
        name: response.data.body.name,
        loading: false,
        quill: new QuillEditor(document.getElementById("editor"), {
          modules: {
            toolbar: toolbarOptions,
          },
          theme: "snow",
        }),
      });
      this.state.quill.setContents(JSON.parse(response.data.body.detail));
    } catch (error) {
      this.setState({
        ...this.state,
        error: error.message,
        loading: false,
      });
    }
  }

  // useEffect(() => {
  //   if (client[0]) {
  //     setName(client[0].name);
  //     quill.setContents(JSON.parse(client[0].detail).ops);
  //   }
  // }, [client]);

  handleFormChange = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      await sendData(
        `${config.api}/api/client/${this.props.match.params.id}`,
        "PUT",
        {
          id: this.props.match.params.id,
          name: this.state.name,
          detail: JSON.stringify({ ...this.state.quill.getContents() }),
        }
      );
      this.setState({
        ...this.state,
        loading: false,
      });
      this.props.history.push("/client");
    } catch (error) {
      this.setState({
        ...this.state,
        loading: false,
        error: error.message,
      });
    }
  };

  handleOpenModal = () => {
    this.setState({ ...this.state, openModal: !this.state.openModal });
  };

  handleDelete = async () => {
    this.setState({ ...this.state, loading: true });
    try {
      await sendData(
        `${config.api}/api/client/${this.props.match.params.id}`,
        "DELETE"
      );
      this.props.history.push("/client");
      this.setState({ ...this.state, loading: false });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <>
        <Header page="Clientes" />
        <section className="add">
          <h3>AGREGAR UN NUEVO CONTACTO</h3>
          <form
            action=""
            id="add__form"
            className="add__form"
            onSubmit={this.handleFormSubmit}
          >
            <div className="add_form-element-container">
              <label htmlFor="name">
                <p>NOMBRE DEL CLIENTE</p>
                <input
                  onChange={this.handleFormChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Primer nombre"
                  className="add__form-input"
                  value={this.state.name}
                />
              </label>
            </div>
            <div id="editor"></div>
            <button type="submit" id="add__button">
              Editar cliente
            </button>
            <button
              type="button"
              className="delete_button"
              onClick={this.handleOpenModal}
            >
              Eliminar cliente
            </button>
          </form>
          <DeleteModal
            opened={this.state.openModal}
            handleCloseModal={this.handleOpenModal}
            handleDelete={this.handleDelete}
          />
          {this.state.loading && <Loading />}
        </section>
      </>
    );
  }
}

export default ClientEdit;
