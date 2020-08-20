import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';



import 'codemirror/mode/htmlmixed/htmlmixed.js';


import {JSHINT} from 'jshint';
window.JSHINT = JSHINT;


const HTMLEditor = ({onChange}) => {
  return (
    <div>
        <h1>HTML</h1>
      <CodeMirror
        value='Write your HTML here :)'
        options={{
          gutters: ["CodeMirror-lint-markers"],
          lint: true,
          mode: "htmlmixed",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
       onChange={onChange}
      />
    </div>
  );
};

export default HTMLEditor;
