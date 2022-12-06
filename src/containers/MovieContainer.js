import "../css/movie/MovieContainer.css"
import React, {useEffect, useState} from "react";
import Gallery, { GalleryItem } from "../components/movie/Gallery";
import MovieBlurb from "../components/movie/MovieBlurb";
import MoviePoster from "../components/movie/MoviePoster";
import SideBar from "../components/movie/SideBar";
import Trailer from "../components/movie/Trailer";
import { Images } from "../components/movie/imageExport";

function TheMovie (){
  
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
      <Gallery>
        <GalleryItem>Item 1</GalleryItem>
        <GalleryItem>Item 2</GalleryItem>
        <GalleryItem>Item 3</GalleryItem>
      </Gallery>
      <hr/>
      <Trailer/>
      <hr/>
    </div>

    )
}

export default TheMovie;