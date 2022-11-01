import React from "react";
import Episode from "./Episode";
import "../../css/episodes/EpisodeList.css"

function EpisodeList ({episodes, season, onEpisodeClick}) {
  const episodeNodes = episodes.map((episode) => {
    if (episode.season == season) {
    return <Episode episode={episode} onClick={onEpisodeClick} key={episode.productionCode}/>
  }
  })

  return (
    <div id="episode-list-box">
    {episodeNodes}
    </div>
  )}


export default EpisodeList;