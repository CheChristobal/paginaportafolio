import React, { useState } from 'react';

const Editor = ({ code, requiredCode, onChange, onValidate }) => {
  const [isValid, setIsValid] = useState(false);

  const handleValidation = () => {
    setIsValid(code === requiredCode);
    onValidate(code === requiredCode);
  };

  return (
    <div className="editor-container">
      <div className="editor">
        <h2>Editor de Código</h2>
        <textarea value={code} onChange={onChange} />
      </div>
      <button onClick={handleValidation}>Validar Código</button>
      {isValid ? <p>El código es válido.</p> : <p>El código no coincide con el requerido.</p>}
    </div>
  );
};

export default Editor;
