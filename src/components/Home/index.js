import React from "react";
import Carousel from "../Carousel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Home(props) {
  return (
    <section>
      <Carousel updateCurrentPage={props.updateCurrentPage} />

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

        <Typography
          color="primary"
          variant="body1"
          mt={5}
          align="left"
          justify="center"
        >
          Who doesn’t love food?!? Food brings families and friends together and
          is an opportunity for joy in our lives. Livermore! Eat. More.
          Vegetables. is a non-profit (filing in process) organization with a
          simple goal of helping Livermorians increase vegetable consumption.
          Research consistently shows [cite] that adequate vegetable consumption
          improves health outcomes and reduces medical expenses by reducing
          medications and decreasing disease states. <p />

          <span style={{ fontWeight: "500", fontStyle: "italic" }}>
            Healthy eating doesn’t need to be complicated.{" "}
          </span>
          Let’s start with the basics and work together to encourage everyone in
          our community to eat more vegetables. There are many reasons why
          people don’t eat enough vegetables: time, money, access, recipes,
          taste, lack of knowledge. Livermore! Eat. More. Vegetables. (LEMV)’s
          mission is to work within the community to resolve these barriers.
          LEMV will apply for grant funding fall 2022. <p />
          
          This website is an
          education tool, sharing insights on how to enjoyably include more
          vegetables each day. In addition, we provide links to research on the
          latest discoveries about how the quality of our lives improves from
          eating vegetables.<p />
          
          We are focusing on vegetables because it is
          foundational to a healthy diet. Regardless of a person’s dietary
          choices, eating plenty – and a wide variety – of vegetables is key to
          good health. <p />

          LEMV’s mission is to support Livermorians in their
          efforts to Eat. More. Vegetables. <p />

          <span style={{fontStyle: "italic"}}> This page is under construction. As LEMV forms, we will continue to
          update this website. If you would like to become involved, please
          contact us:  <Link href="mailto:info@lemv.org" target="_blank">info@lemv.org </Link> </span>
        </Typography>
        
       
      </Container>
    </section>
  );
}

export default Home;
