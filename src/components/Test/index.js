import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";

function Test(props) {
  var items = [
    {
      url: hero2,
    },
    {
      url: hero1,
    },
    {
      url: hero3,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div
      className="carosuel-background"
      style={{
        backgroundImage: `url(${props.item.url})`,
        height: 400,
      }}
    >
    </div>
  );
}

export default Test;
