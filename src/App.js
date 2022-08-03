
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheMovie from './components/TheMovie';
import EpContainer from './containers/EpContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      A Work In Progress...
      <Router>
        <Routes>
          <Route path="/" element={<EpContainer/>} />
          <Route path="movie" element={<TheMovie/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
