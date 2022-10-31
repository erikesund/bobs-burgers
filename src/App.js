
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import Characters from './components/Characters';
import EpContainer from './containers/EpContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      A Work In Progress... Testing Change for GH Desktop ... Another Change for Testing
      <Router>
        <Routes>
          <Route path="/" element={<EpContainer/>} />
          <Route path="movie" element={<Movie/>} />
          <Route path="characters" element={<Characters/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
