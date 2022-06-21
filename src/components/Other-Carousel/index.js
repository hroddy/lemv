import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero9 from "../../assets/9.png";
import hero17 from "../../assets/17.png";
import hero19 from "../../assets/19.png";

import liv6 from "../../assets/livermore/aa-liv-6.jpg";
import liv7 from "../../assets/livermore/aa-liv-7.jpg";

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
          alt="close up of purple and green microgreens with a red bell pepper"
          src={hero9}
        />
      </div>
      <div>
        <img
          alt="the iconic front display of Baughman's Western Outfitters with their fake horse"
          src={liv6}
        />
      </div>
      <div>
        <img
          alt="carrots, broccoli and zuchini atop a bowl of quinoa with a lime in the corner"
          src={hero17}
        />
      </div>
      <div>
        <img
          alt="metal flower art installation in front of the alehouse"
          src={liv7}
        />
      </div>
      <div>
        <img
          alt="close up of purple and green cauliflower with droplets of water"
          src={hero19}
        />
      </div>
    </Carousel>
  );
};

export default index;
