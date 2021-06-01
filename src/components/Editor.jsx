import React, { useEffect, useRef } from "react";
import QuillEditor from "quill";
import "../styles/components/Editor.scss";

const Editor = () => {
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
    let quill = new QuillEditor(editor.current, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });
  }, []);

  return <div ref={editor}></div>;
};

export default Editor;
