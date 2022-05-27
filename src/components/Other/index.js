import React from "react";
import OtherCarousel from "../Other-Carousel";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
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

function Other(props) {
  const classes = useStyles();

  return (
    <div>
      <OtherCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          What else is in the works?
        </Typography>

        <Typography
          color="primary"
          fontSize="30"
          variant="body1"
          mt={5}
          align="left"
          justify="center"
        >
          <ul>
            <li>
              What about fruit, fiber, whole grains, and physical activity? Yes!
            </li>
            <li>
              Farmers’ Market vouchers: increasing ease of access for all (grant
              funding)
            </li>
            <li>
              Where do Livermore’s vegetables come from: local sourcing, healthy
              growing practices
            </li>
            <li>Getting our hands dirty: growing vegetables as a community</li>
            <li>
              Health at every size: calorie counting vs nutritional content{" "}
            </li>
            <li>
              Rethink eating habits:
              <Link
                href="https://www.merckconnect.com/static/pdf/balanced-plate-resource.pdf"
                target="_blank"
              >
                {" "}
                balanced plate{" "}
              </Link>{" "}
            </li>
            <li>
            For parents: getting our children involved with food, nutrition, health
            </li>
            <li>
              
              <Link
                href="https://www.health.harvard.edu/blog/phytonutrients-paint-your-plate-with-the-colors-of-the-rainbow-2019042516501"
                target="_blank"
              >
                {" "}
                Eat the rainbow! {" "}
              </Link>{" "}Diversity in our vegetable consumption is crucial.
            </li>
            <li>
            Research: links to research studies supporting health benefits of vegetables
            </li>
          </ul>
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

export default Other;
