import React, { useContext } from "react";
import AceEditor from "react-ace";
import "./AceEditorComponent.css";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import webSocketContext from "../../contexts/websocket";

const AceEditorComponent = () => {

  const {updatedCode, handleCodeFromAceEditor} = useContext(webSocketContext);

  return (
    <div className="ace-editor">
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="code-editor"
        value={updatedCode}
        fontSize={16}
        showPrintMargin={false}
        onChange={handleCodeFromAceEditor}
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%", height: "590px" }}
        readOnly={false}
        setOptions={{
          useWorker: false, // Disable the worker (might affect performance/features)
        }}
      />
    </div>
  );
};

export default AceEditorComponent;
