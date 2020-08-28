import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br/>
      <Courses></Courses>
    </div>
  );
}

export default App;
