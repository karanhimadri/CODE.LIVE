import React from "react";
import "./CodeEditor.css";
import AceEditorComponent from "../../components/AceEditorSetup/AceEditorComponent";
import ActionBar from "../../components/ActionSidebar/ActionBar";

const CodeEditor = () => {
  return (
    <>
      <div className="code-editor-container">
        <div className="inner-container">
          <div className="ace-component">
            <AceEditorComponent />
          </div>
          <div className="action-bar">
            <ActionBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
