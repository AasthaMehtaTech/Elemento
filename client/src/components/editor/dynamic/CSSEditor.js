import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';



import 'codemirror/mode/css/css.js';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/css-lint';
import 'codemirror/addon/hint/css-hint';



const CSSEditor = ({onChange}) => {
  return (
    <div>
        <h1>CSS</h1>
      <CodeMirror
        value='Write your CSS here :)'
        options={{
          gutters: ["CodeMirror-lint-markers"],
          mode: "css",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
       onChange = {onChange}
      />
    </div>
  );
};

export default CSSEditor;
