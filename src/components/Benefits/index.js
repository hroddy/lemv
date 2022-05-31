import React from "react";
import BenefitsCarousel from "../Benefits-Carousel";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Benefits(props) {
  return (
    <div>
      <BenefitsCarousel updateCurrentPage={props.updateCurrentPage} />

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
          <cite>[1-2]</cite>
          <p />
          As a culture, we have begun to focus more on self care and few things
          impact our health as surely as the food we eat. Eating nourishing food
          is also an act of self-love.
          <p />
          <p />
          <p />
          <p />
          <hr />
          <p />
          <p />
          <p />
          <p />
          <span style={{ fontStyle: "italic" }}>
            <ol>
              <li>
                Lee SH. Adults Meeting Fruit and Vegetable Intake
                Recommendations — United States, 2019. MMWR Morb Mortal Wkly
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
                Cluster-Randomized Controlled Trial. Nutrients. 2020;12(8):2343.
                doi:{" "}
                <Link
                  href="https://drive.google.com/file/d/1j-M5xbXseo_50evUUEOOODUOQR2RI--b/view?usp=sharing"
                  target="_blank"
                >
                  10.3390/nu12082343{" "}
                </Link>{" "}
              </li>
            </ol>{" "}
            <p />
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

export default Benefits;
