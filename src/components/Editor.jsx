import { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import "codemirror/theme/dracula.css";
import "codemirror/theme/moxer.css";
// import * as monaco from "monaco-editor";
import "codemirror/theme/monokai.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Editor = () => {
  async function init() {
    Codemirror.fromTextArea(document.getElementById("realTimeEditor"), {
      lineNumbers: true,
      mode: {
        name: "javascript",
        json: true,
      },
      theme: "monokai",
      autoCloseTags: true,
      autoCloseBrackets: true,
    });
  }
  useEffect(() => {
    console.log("hello");
    init();
  }, []);
  return <textarea id="realTimeEditor"></textarea>;
};

export default Editor;
