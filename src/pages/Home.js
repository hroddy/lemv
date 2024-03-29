import React from "react";

import Carousel from "../components/Carousel";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <section>
      <Carousel />

      <Container>
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Food is an opportunity for joy in our lives.
        </Typography>

        <Typography my={5} color="primary" variant="body1" align="center">
          <Button
            variant="filled"
            sx={{ backgroundColor: "#97d600" }}
            href="/blog"
          >
            Check out our blog!
          </Button>
        </Typography>

         <Typography
          color="primary"
          variant="body1"
          my={4}
          align="left"
          justify="center"
        >{/*
          February is National Heart Month! Coronary heart disease affects
          nearly 16 million Americans and can lead to death from heart attack or
          stroke. This month we would like to focus on raising awareness for the
          dangers of cardiovascular or heart disease and what can be done to
          take care of your heart health.
          <p />
          Heart disease is the leading cause of death in Americans. Changes in
          daily habits can be one of the best ways to prevent heart disease.
          Poor diet can also cause heart disease. Simple changes in your regular
          eating habits can help keep your heart strong. When cooking at home,
          think about appropriate serving sizes for meats.Tasty and filling
          vegetable sides can be added. When eating out, try choosing vegetables
          instead of french fries as your side.
          <p />
          For more resources and information about National Heart Month, check
          out our{" "}
          <Link href="http://www.lemv.org/more" target="_blank">
            More
          </Link>{" "}
          page.
          <p />
          <hr />
          <p /> */}
          Food is foundational to a healthy life and can bring families,
          friends, and communities together. Livermore! Eat. More. Vegetables.
          (LEMV) is an organization with a simple goal of helping
          Livermorians increase vegetable consumption. Research consistently
          shows that adequate vegetable consumption improves health outcomes and
          reduces medical expenses by reducing medications and decreasing
          disease states.<sup>1-3</sup>
          <p />
          <span style={{ fontWeight: "500", fontStyle: "italic" }}>
            Healthy eating doesn’t need to be complicated.{" "}
          </span>
          Let’s start with the basics and work together to encourage everyone in
          our community to eat more vegetables. There are many reasons why
          people don’t eat enough vegetables: time, money, access, recipes,
          taste, lack of knowledge. Our goal is to work within the community to
          resolve these barriers.
          <p />
          This website is an educational tool, sharing insights on how to
          enjoyably include more vegetables each day. In addition, we provide
          links to research on the latest discoveries about how the quality of
          our lives improves from eating vegetables.
          <p />
          We are focusing on vegetables because it is foundational to a healthy
          diet. Regardless of a person’s dietary choices, eating plenty – and a
          wide variety – of vegetables is key to good health.
          <p />
          LEMV’s mission is to support Livermorians in their efforts to Eat.
          More. Vegetables.
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
              Slagel N, Newman T, Sanville L, et al. A Pilot Fruit and Vegetable
              Prescription (FVRx) Program Improves Local Fruit and Vegetable
              Consumption, Nutrition Knowledge, and Food Purchasing Practices.{" "}
              <span style={{ fontStyle: "italic" }}>Health Promot Pract.</span>{" "}
              Published online June 2, 2021:152483992110181. doi:{" "}
              <Link
                href="https://drive.google.com/file/d/1ACokUeXl7IAiVFVQgZODApYy5avVhl9x/view?usp=sharing"
                target="_blank"
              >
                10.1177/15248399211018169{" "}
              </Link>{" "}
            </li>
            <li>
              Noy S, Patrick R, Henderson‐Wilson C, Nuttman S, Ryan I,
              Henderson-Wilson C. New frontiers in community initiatives to
              increase vegetable consumption.{" "}
              <span style={{ fontStyle: "italic" }}>
                Health Promot J Austr.
              </span>
              2019;30:52-61. doi:{" "}
              <Link
                href="https://drive.google.com/file/d/1H2nQ_H4Qur81Qtxu9mV5Z2Xd7ftat0aP/view?usp=sharing"
                target="_blank"
              >
                10.1002/hpja.207{" "}
              </Link>{" "}
            </li>
            <li>
              Lee SH. Adults Meeting Fruit and Vegetable Intake Recommendations
              — United States, 2019.{" "}
              <span style={{ fontStyle: "italic" }}>
                MMWR Morb Mortal Wkly Rep.
              </span>{" "}
              2022;71. doi:
              <Link
                href="https://www.cdc.gov/mmwr/volumes/71/wr/mm7101a1.htm"
                target="_blank"
              >
                10.15585/mmwr.mm7101a1{" "}
              </Link>{" "}
            </li>
          </ol>
          <p />
          This page is under construction. As LEMV forms, we will continue to
          update this website. If you would like to become involved, please
          contact us:{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>{" "}
        </Typography>
      </Container>
    </section>
  );
};

export default Home;
