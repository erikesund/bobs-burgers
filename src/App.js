
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
      <h1 id='work-in-progress'>A Work In Progress...</h1>
      <Router>
        <Routes>
          <Route path="/" element={<EpContainer/>} />
          <Route path="episodes" element={<EpContainer/>} />
          <Route path="movie" element={<MovieContainer/>} />
          <Route path="characters" element={<CharactersContainer/>} />
          {/* <Route path="about" element={<AboutContainer/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
