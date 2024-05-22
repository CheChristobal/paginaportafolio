import React, { useState, useEffect } from 'react';
import './App.css'; // Importa el archivo CSS externo
import coursesData from './coursesData.json'; // Importa el archivo JSON

const CourseList = ({ onCourseSelect }) => {
  return (
    <div className="course-list">
      <h2>Lista de Cursos</h2>
      <ul>
        {coursesData.map(course => (
          <li key={course.id} onClick={() => onCourseSelect(course)}>
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChallengeList = ({ challenges, onChallengeSelect }) => {
  return (
    <div className="challenge-list">
      <h2>Desafíos del Curso</h2>
      <ul>
        {challenges.map(challenge => (
          <li key={challenge.id} onClick={() => onChallengeSelect(challenge)}>
            {challenge.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChallengeDetails = ({ challenge, onToggleCode, showCode }) => {
  return (
    <div className="challenge-details">
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <button onClick={onToggleCode}>
        {showCode ? 'Ocultar Código Resuelto' : 'Mostrar Código Resuelto'}
      </button>
    </div>
  );
};

const Editor = ({ code, onChange }) => {
  return (
    <div className="editor-container">
      <div className="editor">
        <h2>Editor de Código</h2>
        <textarea value={code} onChange={onChange} />
      </div>
    </div>
  );
};

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [editorCode, setEditorCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (selectedChallenge) {
      setEditorCode(selectedChallenge.code);
    }
  }, [selectedChallenge]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedChallenge(null); // Reiniciar el desafío seleccionado al cambiar de curso
    setShowCode(false); // Ocultar el código al cambiar de curso
  };

  const handleChallengeSelect = (challenge) => {
    setSelectedChallenge(challenge);
    setShowCode(false); // Ocultar el código al cambiar de desafío
  };

  const handleToggleCode = () => {
    setShowCode(prevShowCode => !prevShowCode);
  };

  const handleEditorChange = (e) => {
    setEditorCode(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Desafíos de Programación</h1>
      <div className="course-container">
        <CourseList onCourseSelect={handleCourseSelect} />
        {selectedCourse && (
          <ChallengeList
            challenges={selectedCourse.challenges}
            onChallengeSelect={handleChallengeSelect}
          />
        )}
      </div>
      {selectedChallenge && (
        <div className="challenge-container">
          <ChallengeDetails
            challenge={selectedChallenge}
            onToggleCode={handleToggleCode}
            showCode={showCode}
          />
          {showCode && (
            <Editor code={editorCode} onChange={handleEditorChange} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
