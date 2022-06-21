import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero15 from "../../assets/15.png";
import hero11 from "../../assets/11.png";
import hero13 from "../../assets/13.png";
import hero20 from "../../assets/20.png";

const index = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      animationHandler={"fade"}
      renderThumbs={() => {}}
    >
      <div>
        <img
          alt="a mother with red fingernails helps her daughter safely cut a red bell pepper"
          src={hero15}
        />
      </div>
      <div>
        <img
          alt="roasted brussel sprouts with large flake salt in a cast iron pan"
          src={hero11}
        />
      </div>
      <div>
        <img
          alt="a mother with blue fingernails helps her daughter tear herbs for a dish"
          src={hero20}
        />
      </div>
      <div>
        <img alt="bean sprouts rest on a bowl of soup" src={hero13} />
      </div>
    </Carousel>
  );
};

export default index;
