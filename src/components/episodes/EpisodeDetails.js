import React from "react";
import "../../css/episodes/EpisodeDetails.css";
import BurgerOfTheDay from "./BurgerOfTheDay";

function EpisodeDetails ({episode, burgers}) {
  if (episode === null){
    return null;
  }
  
  // const findBurgerOTD = () => {     
  //   let foundBurger = burgers.find(burger => burger.episodeUrl === episode.url)
  //   if(foundBurger == null){
  //     return null
  //   } 
  //   else {
  //     return foundBurger
  //   }
  // }

  const episodeBurgersArray = () => {
    let burgersArray = burgers.filter(burger => burger.episodeUrl === episode.url)
    return burgersArray
  }

  // let foundBurger = findBurgerOTD()  
  let burgersArray = episodeBurgersArray()
  
  return (
    <div id="episode-details-box">
      <h3>{episode.name} : Season {episode.season} - Episode {episode.episode}</h3>
      <p>Production Code: {episode.productionCode}</p>
      <p>First Aired: {episode.airDate}</p>
      <p>Total Viewers: {episode.totalViewers}</p>
      <BurgerOfTheDay burgersArray={burgersArray}/>
    </div>
  )
};

export default EpisodeDetails;