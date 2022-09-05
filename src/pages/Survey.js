import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Survey = () => {
  return (
    <div>
      {/* LG MD DISPLAY */}
      <Container >
        <Typography color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display">
          Survey has closed
        </Typography>
        <Typography my={6} align="left" color="primary">
          Data collection has ended for the Needs Assessment. Thank you to
          everyone who participated! We'll do more in the future, so if you're
          interested in participating in a future survey, email <Link href="mailto:karen@lemv.org" target="_blank">karen@lemv.org</Link>{" "}
          or <Link href="mailto:morgan@lemv.org" target="_blank">morgan@lemv.org</Link>.
          <p />
          We're moving from the data collection stage of the current Needs
          Assessment to data analysis. If you're interested in the results,
          check back to the website in November or email us at the above
          addesses and we'll add you to the contact list.
        </Typography>
      </Container>
    </div>
  );
};

export default Survey;
