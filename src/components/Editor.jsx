import React from "react";
import { Editor, EditorState } from "draft-js";
import "../styles/components/Editor.scss";

const Editor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
};

export default Editor;
