import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import QuillEditor from "quill";
import useSendData from "../hooks/useSendData";
import config from "../config";
import "../styles/pages/New.scss";
import "../styles/components/EditorComponent.scss";

const ClientNew = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const editor = useRef("");
  const [quill, setQuill] = useState("");

  useEffect(() => {
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
    setQuill(
      new QuillEditor(editor.current, {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
      })
    );
  }, []);

  const handleFormChange = (event) => {
    console.log(quill);
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    useSendData(`${config.api}/api/client`, "POST", {
      name: name,
      detail: JSON.stringify({ ...quill.getContents() }),
    });
    setTimeout(() => {
      history.push("/client");
    }, 1000);
  };
  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO CONTACTO</h3>
      <form
        action=""
        id="add__form"
        className="add__form"
        onSubmit={handleFormSubmit}
      >
        <div className="add_form-element-container">
          <label htmlFor="name">
            <p>NOMBRE DEL CLIENTE</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="name"
              id="name"
              placeholder="Primer nombre"
              className="add__form-input"
              value={name}
            />
          </label>
        </div>
        <div ref={editor}></div>
        <button type="submit" id="add__button">
          Agregar Cliente
        </button>
      </form>
    </section>
  );
};

export default ClientNew;
