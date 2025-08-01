import { useState, useEffect } from "react";
import Prism from "prismjs"; // ✅ Import Prism
import "prismjs/themes/prism-tomorrow.css";
import "./App.css";
import Editor from "react-simple-code-editor";

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeSnippet = `function sum() {
  return 1 + 1;
}`;

  return (
    <>
      <main>
        <div className="left">
          <div className="codeInput">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => Prism.highlight(code, Prism.languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                backgroundColor: "black",
                color: "white",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="submitButton">
            <button>Submit</button>
          </div>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
