import React from 'react';

const Output = ({ output }) => {
  return (
    <div className="output">
      <h2>Salida</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;
