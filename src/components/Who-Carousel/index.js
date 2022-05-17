import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero16 from "../../assets/16.png";
import hero18 from "../../assets/18.png";

import liv5 from "../../assets/livermore/aa-liv-5.jpg";
import liv11 from "../../assets/livermore/aa-liv-11.jpg";
import liv13 from "../../assets/livermore/aa-liv-13.jpg";

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
        <img alt="crowds of people play in the fountain at the intersection of first street and north livermore ave" src={liv11} />
      </div>
      <div>
        <img alt="colorful bowl of mediterranean salad with cucumbers, tomatoes, red onions, and feta cheese " src={hero18} />
      </div>
      <div>
        <img alt="the mural of livermore on the side of strizzi's restaurant" src={liv13} />
      </div>
      <div>
        <img alt="a wooden cowboy signs advertises the livermore rodeo in the second week of june" src={liv5} />
      </div>
    </Carousel>
  );
};

export default index;
