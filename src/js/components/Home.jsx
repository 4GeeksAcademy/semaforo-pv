import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
 const [color, setColor] = useState("red");

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "glow" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "glow" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "glow" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};

export default Home;