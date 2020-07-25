import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';



require('codemirror/mode/css/css.js');
require('codemirror/addon/lint/css-lint');
require('codemirror/addon/lint/lint.js');
require('codemirror/addon/hint/css-hint');


const CSSEditor = ({code}) => {
  return (
    <div>
        <h1>CSS</h1>
      <CodeMirror
        value={code}
        options={{
          gutters: ["CodeMirror-lint-markers"],
          lint: true,
          mode: "css",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          readOnly: true,
         
        }}
       
      />
    </div>
  );
};

export default CSSEditor;
