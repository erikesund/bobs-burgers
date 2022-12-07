
import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieContainer from './containers/MovieContainer';
import CharactersContainer from './containers/CharactersContainer';
import EpContainer from './containers/EpContainer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <p id='work-in-progress'>A Work In Progress...</p>
      <Router>
        <Routes>
          <Route path="/" element={<EpContainer/>} />
          <Route path="episodes" element={<EpContainer/>} />
          <Route path="movie" element={<MovieContainer/>} />
          <Route path="characters" element={<CharactersContainer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
