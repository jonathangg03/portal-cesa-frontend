import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import QuillEditor from "quill";
import useSendData from "../hooks/useSendData";
import "../styles/pages/New.scss";
import "../styles/components/EditorComponent.scss";

const ClientNew = () => {
  const history = useHistory();
  let quill = null;
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const editor = useRef(null);

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
    quill = new QuillEditor(editor.current, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });
  }, [quill]);

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    useSendData("https://portal-cesa.vercel.app/api/client", "POST", {
      ...formValues,
      detail: JSON.stringify({ ...quill.getContents() }),
    });
    setTimeout(() => {
      history.push("/client");
    }, 1000);
    console.log(quill.getContents());
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
              value={formValues.name}
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
