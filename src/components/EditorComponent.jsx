import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
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
