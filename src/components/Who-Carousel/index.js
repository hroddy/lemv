import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero16 from "../../assets/16.png";
import hero18 from "../../assets/18.png";

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
        <img alt="a woman holds leafy greens, blocking her face from view" src={hero16} />
      </div>
      <div>
        <img alt="colorful bowl of mediterranean salad with cucumbers, tomatoes, red onions, and feta cheese " src={hero18} />
      </div>
    </Carousel>
  );
};

export default index;
