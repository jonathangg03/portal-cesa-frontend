import React, { Component } from "react";
import QuillEditor from "quill";
import sendData from "../utils/sendData";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/New.scss";
import "../styles/components/EditorComponent.scss";

class ClientNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quill: "",
      name: "",
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
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
      quill: new QuillEditor(document.getElementById("editors"), {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
      }),
    });
  }

  handleFormChange = (event) => {
    this.setState({ ...this.state, name: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      await sendData(`${config.api}/api/client`, "POST", {
        name: this.state.name,
        detail: JSON.stringify({ ...this.state.quill.getContents() }),
      });
      this.setState({ ...this.state, loading: false });
      this.props.history.push("/client");
    } catch (error) {
      this.setState({ ...this.state, error: error.message, loading: false });
    }
  };

  render() {
    return (
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
                required
              />
            </label>
          </div>
          <div id="editors"></div>
          <button type="submit" id="add__button">
            Agregar Cliente
          </button>
        </form>
        {this.state.loading && <Loading />}
        {this.state.error && <p>{this.state.error}</p>}
      </section>
    );
  }
}

export default ClientNew;
