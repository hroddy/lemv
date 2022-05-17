import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";
import hero4 from "../../assets/4.png";
import hero5 from "../../assets/5.png";
import hero6 from "../../assets/6.png";
import hero10 from "../../assets/10.png";
import hero12 from "../../assets/12.png";
import hero24 from "../../assets/24.png";
import hero25 from "../../assets/25.png";

import liv1 from "../../assets/livermore/aa-liv-1.jpg";
import liv2 from "../../assets/livermore/aa-liv-2.jpg";
import liv3 from "../../assets/livermore/aa-liv-3.jpg";
import liv4 from "../../assets/livermore/aa-liv-4.jpg";
import liv14 from "../../assets/livermore/aa-liv-14.jpg";

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
        <img alt="hands slicing bell peppers next to kale" src={hero12} />
      </div>
      <div>
        <img alt="sunset over the livermore hills" src={liv2} />
      </div>
      <div>
        <img alt="broccoli and leaks in a cotton tote" src={hero25} />
      </div>
      <div>
        <img alt="hands touching lettuce in a garden" src={hero3} />
      </div>
      <div>
        <img alt="purple thistle flowers against a backdrop of livermore hills at sunset" src={liv3} />
      </div>
      <div>
        <img alt="cabbage and cauliflower on display" src={hero4} />
      </div>
      <div>
        <img alt="hands prepare a pizza with tomatoes" src={hero2} />
      </div>
      <div>
        <img alt="foliage in the foreground and livermore vineyards in the background" src={liv1} />
      </div>
      <div>
        <img alt="a rainbow of vegetables held by hands" src={hero5} />
      </div>
      <div>
        <img alt="man's hand grabbing an artichoke" src={hero24} />
      </div>
      <div>
        <img alt="front the livermore heritage society at carnegie park, local landmark" src={liv4} />
      </div>
      <div>
        <img alt="two fine dining dishes featuing vegetables" src={hero6} />
      </div>
      <div>
        <img alt="broccoli and baby corn in water in a pot" src={hero10} />
      </div>
      <div>
        <img alt="metal flower structure" src={liv14} />
      </div>
      <div>
        <img alt="vegetabes on a table" src={hero1} />
      </div>
      
    </Carousel>
  );
};

export default index;
