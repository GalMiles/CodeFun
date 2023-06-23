
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Editor from 'react-monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import '../App.css'
import theme from '../utils/editorTheme';



function CodeEditor ({value, onValueChange}){

  const editorRef = useRef(null);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {

    const loadTheme = function () {
      monaco.editor.defineTheme('custom-theme', theme);
      monaco.editor.setTheme('custom-theme');
  };
  loadTheme();
  }, []);

  const handleEditorChange = (newValue, event) => {
    console.log(`editor value ${newValue}`);
    onValueChange(newValue, event);
    //send to CodeEditorPage and then to server 
  };

  return (
    <Editor
      width="100%"
      height="700"
      language="javascript"
      value={value}
      theme='vs-dark'
      onChange={handleEditorChange}
      options={{readOnly: readOnly}}
    />
  );
};

export default CodeEditor;