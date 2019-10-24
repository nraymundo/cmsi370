import React from "react";

import "./Carousel.css";

const Carousel = () => (
  <div className="Carousel">
    <h1>Title.</h1>
    <hr id="line" />
    <div className="Photos">
      <img src={require("./images/jonah.jpeg")} id="jonah"></img>
      <img src={require("./images/jonah2.jpg")} id="jonah"></img>
      <img src={require("./images/jonah3.jpg")} id="jonah"></img>
      <img src={require("./images/jonah4.jpg")} id="jonah"></img>
      {/* <img src={require("./images/jonah.jpeg")} id="jonah"></img>
      <img src={require("./images/jonah2.jpg")} id="jonah"></img>
      <img src={require("./images/jonah3.jpg")} id="jonah"></img>
      <img src={require("./images/jonah4.jpg")} id="jonah"></img> */}
    </div>
  </div>
);

export default Carousel;
