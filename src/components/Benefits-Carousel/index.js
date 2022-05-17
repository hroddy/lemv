import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero22 from "../../assets/22.png";
import hero23 from "../../assets/23.png";


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
        <img alt="shredded carrots top a salal in a bowl" src={hero22} />
      </div>
      <div>
        <img alt="hands slicing bell peppers next to kale" src={hero23} />
      </div>
    </Carousel>
  );
};

export default index;
