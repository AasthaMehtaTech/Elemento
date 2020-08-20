import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';



import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/hint/javascript-hint';

import { JSHINT } from 'jshint';
window.JSHINT = JSHINT;

const JsEditor = ({onChange}) => {
  return (
    <div>
      <h1> JavaScript </h1>
      <CodeMirror
        value='//Write your JavaScript here :)'
        options={{
          gutters: ["CodeMirror-lint-markers"],
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          lint: true, 
        }}
       onChange={onChange}
      />
    </div>
  );
};

export default JsEditor;
