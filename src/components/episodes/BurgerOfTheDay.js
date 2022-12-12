import React, {useState, useEffect} from "react";
import "../../css/episodes/BurgerOfTheDay.css"

const BurgerOfTheDay = ({burgersArray}) => {

  const [selectedBurger, setSelectedBurger] = useState([]);

  useEffect(() => {
    setSelectedBurger(burgersArray[0])
  })

  return (
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
  )
};


export default BurgerOfTheDay;