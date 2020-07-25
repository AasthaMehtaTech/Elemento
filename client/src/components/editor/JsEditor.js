import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';



require('codemirror/mode/javascript/javascript.js');
require('codemirror/addon/lint/javascript-lint');
require('codemirror/addon/lint/lint.js');
require('codemirror/addon/hint/javascript-hint');


const JsEditor = ({code}) => {
  return (
    <div>
      <h1> JavaScript </h1>
      <CodeMirror
        value={code}
        options={{
          gutters: ["CodeMirror-lint-markers"],
          lint: true,
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          readOnly: true,
         
        }}
       
      />
    </div>
  );
};

export default JsEditor;
