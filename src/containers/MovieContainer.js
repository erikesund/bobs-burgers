import "../css/movie/MovieContainer.css"
import React, { useState } from "react";
import Gallery from "../components/movie/Gallery";
import MovieBlurb from "../components/movie/MovieBlurb";
import MoviePoster from "../components/movie/MoviePoster";
import SideBar from "../components/movie/SideBar";
import Trailer from "../components/movie/Trailer";

function TheMovie (){

  const [galleryImages, setGalleryImages] = useState([]);
  
  return (
    <div id="main-container">
      <div id="top-bar">
        <MovieBlurb/>
        <hr/>
        <MoviePoster/>
        <hr/>
      </div>
      <SideBar/>
      <hr/>
      <Gallery/>
      <hr/>
      <Trailer/>
      <hr/>
    </div>

    )
}

export default TheMovie;