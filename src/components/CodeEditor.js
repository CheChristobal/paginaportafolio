import React from 'react';
import { Controlled as CodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="code-editor">
      <CodeMirror
        value={code}
        height="300px"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
