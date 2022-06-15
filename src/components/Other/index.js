import React from "react";
import OtherCarousel from "../Other-Carousel";
import Box from "@mui/material/Button";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Other(props) {
  const { updateCurrentPage } = props;
  return (
    <div>
      <OtherCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          What else is in the works?
        </Typography>
        <Button
          variant="filled"
          onClick={() => updateCurrentPage("Survey")}
          sx={{ backgroundColor: "#97d600" }}
        >
          Take our survery
        </Button>
        <div
          style={{
            maxWidth: "750px",
            backgroundColor: "#5D666F",
            borderRadius: "7%",
          }}
        >
          <Typography
            color="secondary"
            fontSize="30"
            variant="body1"
            my={5}
            p={1}
            align="left"
            justify="center"
          >
            <ul>
              <li>
                What about fruit, fiber, whole grains, and physical activity?
              </li>
              <p />
              <li>
                Farmers’ Market vouchers*: increasing ease of access for all
              </li>
              <p />
              <li>
                Type 2 diabetes, adults* –{" "}
                <Link
                  href="https://www.prnewswire.com/news-releases/american-college-of-lifestyle-medicine-publishes-consensus-statement-with-multiple-society-support-on-use-of-diet-as-a-primary-intervention-to-achieve-diabetes-remission-301551431.html#"
                  target="_blank"
                  color="secondary"
                >
                  diet recommended
                </Link>{" "}
                as a primary remission intervention<sup>1</sup>
              </li>
              <p />
              <li>
                Where do Livermore’s vegetables come from: local sourcing,
                healthy growing practices
              </li>
              <p />
              <li>
                Getting our hands dirty: growing vegetables as a community
              </li>
              <p />
              <li>
                Health at every size: calorie counting vs nutritional content{" "}
              </li>
              <p />
              <li>
                Rethinking our eating habits:
                <Link
                  href="https://www.merckconnect.com/static/pdf/balanced-plate-resource.pdf"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  balanced plate{" "}
                </Link>{" "}
              </li>
              <p />
              <li>
                For parents: getting our children involved with food, nutrition,
                health
              </li>
              <p />
              <li>
                <Link
                  href="https://www.health.harvard.edu/blog/phytonutrients-paint-your-plate-with-the-colors-of-the-rainbow-2019042516501"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  Eat the rainbow!
                </Link>
                <sup>2</sup> Diversity in our vegetable consumption is crucial.
              </li>
              <p />
              <li>
                Research: links to research studies supporting health benefits
                of vegetables
              </li>
            </ul>
          </Typography>
        </div>

        <Typography
          color="primary"
          fontSize={12}
          fontStyle="italic"
          variant="body1"
          mt={3}
          mb={3}
          align="left"
          justify="center"
        >
          *LEMV will apply for grant funding{" "}
        </Typography>
        <hr />
        <Typography
          color="primary"
          fontSize={12}
          variant="body1"
          mt={5}
          mb={4}
          align="left"
          justify="center"
        >
          <ol>
            <li>
              Rosenfeld RM, Kelly JH, Agarwal M, et al. Dietary Interventions to
              Treat Type 2 Diabetes in Adults with a Goal of Remission: An
              Expert Consensus Statement from the American College of Lifestyle
              Medicine.{" "}
              <span style={{ fontStyle: "italic" }}>
                American Journal of Lifestyle Medicine.
              </span>
              Published online May 18, 2022:15598276221087624. doi:{" "}
              <Link
                href="https://doi.org/10.1177/15598276221087624"
                target="_blank"
              >
                10.1177/15598276221087624{" "}
              </Link>{" "}
            </li>
            <li>
              LDN KDM MS, RD. Phytonutrients: Paint your plate with the colors
              of the rainbow.{" "}
              <span style={{ fontStyle: "italic" }}>Harvard Health.</span>{" "}
              Published April 25, 2019. Accessed May 28, 2022.{" "}
              <Link
                href="https://www.health.harvard.edu/blog/phytonutrients-paint-your-plate-with-the-colors-of-the-rainbow-2019042516501"
                target="_blank"
              >
                https://www.health.harvard.edu/blog/phytonutrients-paint-your-plate-with-the-colors-of-the-rainbow-2019042516501{" "}
              </Link>{" "}
            </li>
          </ol>
        </Typography>
        <Typography
          color="primary"
          fontSize={12}
          variant="body1"
          mb={4}
          align="center"
          justify="center"
        >
          This page is under construction. As LEMV forms, we will continue to
          update this website. If you would like to become involved, please
          contact us:{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>{" "}
        </Typography>
      </Container>
    </div>
  );
}

export default Other;
