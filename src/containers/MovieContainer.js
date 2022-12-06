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
        <GalleryItem><img src="/movie/gallery/image01.jpg" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image02.jpg" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image03.jpg" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image04.jpg" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image05.jpg" width="1000px"/></GalleryItem>
      </Gallery>
      <hr/>
      <Trailer/>
      <hr/>
    </div>

    )
}

export default TheMovie;