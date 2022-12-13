import React, {useState, useEffect} from "react";
import "../../css/episodes/BurgerOfTheDay.css"

const BurgerOfTheDay = ({burgersArray}) => {

  const [selectedBurger, setSelectedBurger] = useState();
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setSelectedBurger(burgersArray[activeIndex])
  })

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex =  burgersArray.length - 1;
    } else if (newIndex >= burgersArray.length) {
        newIndex = 0
    }
    setActiveIndex(newIndex);
  }

  return (
  <div id="botd">
    <div className="chalkboard">
      <img src="/chalkboard.png" alt="Chalkboard" width="250px"></img>
      <div className="centered">
        Burger of the Day: { 
          selectedBurger != null?  selectedBurger.name : "There is no burger of the day in this episode :("
        }
      </div>
      <div className="bottom">
        {selectedBurger != null? <p>Price: {selectedBurger.price}</p>: null}
      </div>
    </div>
    <div id="arrow-controls">
      <i className="icon-arrow-left" onClick={() => {
        updateIndex(activeIndex - 1);
      }}></i>

      {burgersArray.map((burgers, index) => {
        return (
          <button
          className={`${index === activeIndex ? "active" : ""}`}
          onClick={() => {
          updateIndex(index)
          }}>
            {index + 1}
          </button>
        )
      })}

      <i className="icon-arrow-right" onClick={() => {
        updateIndex(activeIndex + 1);
      }}></i>
    </div>
  </div>
  )
};


export default BurgerOfTheDay;