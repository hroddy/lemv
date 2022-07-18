import React from "react";
import BenefitsCarousel from "../components/Benefits-Carousel";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Benefits = () => {
  return (
    <div>
      <BenefitsCarousel />

      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Why is it important to eat vegetables?
        </Typography>
        <Typography
          color="primary"
          fontSize="30"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Research has consistently shown that adequate vegetable intake
          improves health outcomes and reduces medical expenses by reducing
          medications, decreasing disease states, improving quality of life, and
          displacing less healthy food choices; however, only 10% of American
          adults consume the recommended daily allowance of vegetables.
          <sup>1-2</sup>
          <p />
          As a culture, we have begun to focus more on self care and few things
          impact our health as surely as the food we eat. While eating well can
          help maintain a healthy body, it can also impact a variety of
          illnesses. In fact, a recent study in the American Journal of
          Lifestyle Medicine has proved that{" "}
          <Link
            target="_blank"
            href="https://www.prnewswire.com/news-releases/american-college-of-lifestyle-medicine-publishes-consensus-statement-with-multiple-society-support-on-use-of-diet-as-a-primary-intervention-to-achieve-diabetes-remission-301551431.html#"
          >
            “diet alone can achieve remission… for many adults with type 2
            diabetes.”
          </Link>
          {" "}
          <Link
            target="_blank"
            href="https://www.health.harvard.edu/blog/phytonutrients-paint-your-plate-with-the-colors-of-the-rainbow-2019042516501"
          >
            Vegetables also contain phytonutrients
          </Link>
          , which not only protect from chronic disease, but may
          also protect against some forms of cancer. In fact,{" "}
          <Link
            target="_blank"
            href="https://www.cancer.org/healthy/eat-healthy-get-active/acs-guidelines-nutrition-physical-activity-cancer-prevention/guidelines.html"
          >
            the American Cancer Society
          </Link>{" "}
           includes eating vegetables as part of their suggested
          guidelines.
          <p />
          All of this data is great news to the many people with chronic illness
          who may have been told they can only be treated through invasive or
          expensive methods. Whether you are seeking to improve your health,
          prevent disease, or simply take better care of yourself, eating more
          vegetables is a great place to start.
        </Typography>
        <hr />
        <Typography variant="body1" my={5} align="left" fontSize={12}>
          Links from the paragraphs:
        <ul>
          <li>
            <Link
              target="_blank"
              href="https://www.prnewswire.com/news-releases/american-college-of-lifestyle-medicine-publishes-consensus-statement-with-multiple-society-support-on-use-of-diet-as-a-primary-intervention-to-achieve-diabetes-remission-301551431.html#"
            >
              American College of Lifestyle Medicine Publishes Consensus
              Statement with Multiple Society Support on Use of Diet as a
              Primary Intervention to Achieve Diabetes Remission.{" "}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.health.harvard.edu/blog/phytonutrients-paint-your-plate-with-the-colors-of-the-rainbow-2019042516501"
            >
              Phytonutrients: Paint your plate with the colors of the rainbow -
              Harvard Health{" "}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.cancer.org/healthy/eat-healthy-get-active/acs-guidelines-nutrition-physical-activity-cancer-prevention/guidelines.html"
            >
              American Cancer Society Guideline for Diet and Physical Activity{" "}
            </Link>
          </li>
        </ul>
        </Typography>
        <hr />
        <Typography variant="body1" mt={5} align="left" fontSize={12}>
          <ol>
            <li>
              Lee SH. Adults Meeting Fruit and Vegetable Intake Recommendations
              — United States, 2019.{" "}
              <span style={{ fontStyle: "italic" }}>MMWR Morb Mortal Wkly</span>
              Rep. 2022;71. doi:{" "}
              <Link
                href="https://www.cdc.gov/mmwr/volumes/71/wr/mm7101a1.htm"
                target="_blank"
              >
                10.15585/mmwr.mm7101a1{" "}
              </Link>{" "}
            </li>
            <li>
              Poelman AAM, Cochet-Broch M, Wiggins B, et al. Effect of
              Experiential Vegetable Education Program on Mediating Factors of
              Vegetable Consumption in Australian Primary School Students: A
              Cluster-Randomized Controlled Trial.{" "}
              <span style={{ fontStyle: "italic" }}>Nutrients</span>.
              2020;12(8):2343. doi:{" "}
              <Link
                href="https://drive.google.com/file/d/1j-M5xbXseo_50evUUEOOODUOQR2RI--b/view?usp=sharing"
                target="_blank"
              >
                10.3390/nu12082343{" "}
              </Link>{" "}
            </li>
          </ol>{" "}
          </Typography>
       
        <Typography
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
};

export default Benefits;
