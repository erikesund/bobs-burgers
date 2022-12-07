import "../css/movie/MovieContainer.css"
import React, {useEffect, useState} from "react";
import Gallery, { GalleryItem } from "../components/movie/Gallery";
import MovieBlurb from "../components/movie/MovieBlurb";
import MoviePoster from "../components/movie/MoviePoster";
import SideBar from "../components/movie/SideBar";
import Trailer from "../components/movie/Trailer";
import { Images } from "../components/movie/imageExport";

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
      <Gallery>
        <GalleryItem><img src="/movie/gallery/image01.jpg" alt="The Belchers' sit around the dinner table and Bob looks shocked" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image02.jpg"  alt="Bob and Linda speak to their bank manager" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image03.jpg" alt="The Belcher children explore a creepy junkjard" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image04.jpg" alt="The townsfolk gather round the sinkhole outside Bob's Burgers" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image05.jpg" alt="The Belchers' sit in their living room looking horrified" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image06.jpg" alt="The Belcher children investigate the sinkhole" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image07.jpg" alt="The Belchers' landlord speaks to them about the situation" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image08.jpg" alt="The Belcher children sit at the counter" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image09.jpg" alt="Linda wearing Gene's burger costume" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image10.jpg" alt="The Belchers' speak at the counter" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image11.jpg" alt="Bob and Linda speak through the service hatch" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image12.jpg" alt="Bob pets a burger" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image13.jpg" alt="Linda looking snappy" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image14.jpg" alt="Tina and Jimmy Junior sing to each other" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image15.jpg" alt="The Belcher children walk down the hall at Flagstaff High School" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image16.jpg" alt="The Belcher children sit in the playground" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image17.jpg" alt="Tina and Jimmy Jr ride horses together in what is presumably a dream" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image18.jpg" alt="The Belcher children look despondent" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image19.jpg" alt="Bob, Linda and Teddy are selling Burgers from a small stand at Wonder Wharf" width="1000px"/></GalleryItem>
        <GalleryItem><img src="/movie/gallery/image20.jpg" alt="The Belcher children look at each other sadly while riding their bikes" width="1000px"/></GalleryItem>
      </Gallery>
      <hr/>
      <Trailer/>
      <hr/>
    </div>

    )
}

export default TheMovie;