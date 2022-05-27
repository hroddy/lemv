import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HowCarousel from "../How-Carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  underClass: {
    width: 500,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 300,
    },
  },
}));

function How(props) {
  const classes = useStyles();

  return (
    <div>
      <HowCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Some ways to add more vegetables to your life!
        </Typography>

        <Typography
          color="primary"
          fontSize="30"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Adding more vegetables to what you are already cooking is the simplest
          way to increase your vegetable intake. For example, adding an extra
          handful of spinach into a casserole your family loves, making that
          cheese omelet into a vegetable cheese omelet, or working towards a
          more{" "}
          <Link
            sx={{ color: "#7B7BFF" }}
            href="https://www.merckconnect.com/static/pdf/balanced-plate-resource.pdf"
            target="_blank"
          >
            {" "}
            balanced plate{" "}
          </Link>{" "}
          <p />
          Here are some great vegetable powered recipes to try! <p />
          <ul>
            <li>
              <Link
                href="https://www.eatright.org/food/planning-and-prep/recipes/veggie-loaded-sloppy-joes-recipe"
                target="_blank"
                style={{ color: "#7B7BFF" }}
              >
                {" "}
                Veggie-Loaded Sloppy Joes Recipe{" "}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.eatright.org/food/planning-and-prep/recipes/slow-cooker-minestrone-soup-recipe"
                target="_blank"
                style={{ color: "#7B7BFF" }}
              >
                {" "}
                Slow-Cooker Minestrone Soup Recipe{" "}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.eatright.org/food/planning-and-prep/recipes/pinto-bean-and-roasted-vegetable-tacos-recipe"
                target="_blank"
                style={{ color: "#7B7BFF" }}
              >
                {" "}
                Pinto Bean and Roasted Vegetable Tacos Recipe{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                href="https://www.eatright.org/food/planning-and-prep/recipes/roasted-beet-hummus-recipe"
                target="_blank"
                style={{ color: "#7B7BFF" }}
              >
                {" "}
                Roasted Beet Hummus Recipe{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                href="https://www.eatingwell.com/recipes/18256/ingredients/vegetables/"
                target="_blank"
                style={{ color: "#7B7BFF" }}
              >
                {" "}
                Healthy Vegetable Recipes | EatingWell{" "}
              </Link>{" "}
            </li>
          </ul>
          <p />
          Looking to learn how to grow your own amazing vegetables? Get your
          hands dirty, give back to our community, or just learn more about
          other great local projects, check out:{" "}
          <Link
            style={{ color: "#7B7BFF" }}
            href="www.fertilegroundworks.org"
            target="_blank"
          >
            FertileGroundWorks.{" "}
          </Link>
          <p />
          <span style={{ fontStyle: "italic" }}>
            {" "}
            This page is under construction. As LEMV forms, we will continue to
            update this website. If you would like to become involved, please
            contact us:{" "}
            <Link href="mailto:info@lemv.org" target="_blank">
              info@lemv.org{" "}
            </Link>{" "}
          </span>
        </Typography>
      </Container>
    </div>
  );
}

export default How;
