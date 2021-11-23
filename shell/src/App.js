import React from 'react';
import './App.css';

const Angular_App = React.lazy( () => import("MFE1/Component"))
//const React_App = React.lazy( () => import("MFE2/Button"))

function App() {
  return (
    <div>
      <h1>This is React Shell</h1>
      <React.Suspense fallback="Loading Angular Component">
        <Angular_App/>
      </React.Suspense>
      
      </div>
  );
}

export default App;
