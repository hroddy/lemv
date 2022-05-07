import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";

const index = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      animationHandler={"fade"}
      renderThumbs={() => {}}
    >
      <div>
        <img alt="vegetabes on table" src={hero1} />
      </div>
      <div>
        <img src={hero2} />
      </div>
      <div>
        <img src={hero3} />
      </div>
    </Carousel>
  );
};

export default index;