import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero9 from "../../assets/9.png";
import hero19 from "../../assets/19.png";

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
        <img alt="close up of purple and green microgreens with a red bell pepper" src={hero9} />
      </div>
      <div>
        <img alt="close up of purple and green cauliflower with droplets of water" src={hero19} />
      </div>
      
    </Carousel>
  );
};

export default index;
