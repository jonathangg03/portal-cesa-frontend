import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "../styles/components/EditorComponent.scss";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const _onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  console.log(editorState);
  return (
    <div>
      <button type="button" onClick={_onBoldClick}>
        Bold
      </button>
      <Editor
        placeholder="Ingresa la infromación del cliente"
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
};

export default EditorComponent;
