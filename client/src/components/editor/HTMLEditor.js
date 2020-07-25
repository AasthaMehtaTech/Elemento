import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';



require('codemirror/mode/htmlmixed/htmlmixed.js');
// require('codemirror/addon/lint/html-lint');
require('codemirror/addon/lint/lint.js');
// require('codemirror/addon/hint/html-hint');


const HTMLEditor = ({code}) => {
  return (
    <div>
        <h1>HTML</h1>
      <CodeMirror
        value={code}
        options={{
          gutters: ["CodeMirror-lint-markers"],
          lint: true,
          mode: "htmlmixed",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          readOnly: true,
         
        }}
       
      />
    </div>
  );
};

export default HTMLEditor;
