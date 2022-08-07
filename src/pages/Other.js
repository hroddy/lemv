import React from "react";
import OtherCarousel from "../components/Other-Carousel";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const More = () => {
  return (
    <div>
      <OtherCarousel />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Questions:
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Here are some Frequently Asked Questions. Have a question we didn’t
          answer? Email us at{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org
          </Link>{" "}
          and we would be happy to help.
        </Typography>
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Why vegetables?
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          The effect of diet on overall health and wellness can be proven now
          more than ever thanks to new studies such as those linked at the end
          of this page. Diets that have the most positive health impact
          emphasize whole, plant-based foods including whole grains, vegetables,
          legumes, fruits, nuts and seeds. These are all amazing foods but
          vegetables are often the easiest to access, the most affordable, and
          the most versatile on this list. There are many different elements to
          a healthy diet and our eating habits are only one part of the complex
          and deeply personal process that is living a healthy life. When
          founding LEMV, we chose to focus on vegetables as one small piece of
          this puzzle.
        </Typography>
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Why Livermore?
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          While not everyone who makes LEMV possible considers Livermore their
          hometown, we do believe in the collective responsibility to support
          our communities in the ways we know how. We also recognize that this
          is the native land of the{" "}
          <Link href="http://www.muwekma.org/" target="_blank">
            Muwekma Ohlone Tribe
          </Link>
          .
        </Typography>
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          How do I grow my own?
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Great question! Whether you are looking to get your hands dirty, give
          back to our community, or just learn more about other great local
          projects, visit{" "}
          <Link href="https://www.fertilegroundworks.org/" target="_blank">
            FertileGroundworks
          </Link>
          , a nonprofit garden “with the mission to encourage, empower, and
          teach individuals and communities to grow healthy, nutritious food,
          organically and sustainably.”
        </Typography>
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          What if I hate vegetables?
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          We hear you. For some people the word vegetables can leave a bad taste
          in their mouth, depending on the types of vegetables they have had in
          their lives. One too many under seasoned carrot can make you want to
          swear them off for good. The main thing to remember is this: if when
          you think of vegetables you imagine some gross or boring dish, don't
          make that dish. There are too many delicious and interesting
          vegetables out there for you to keep eating food you don't like.
          Practice different recipes. Order something new. Find what dishes you
          do like and make those your go-to vegetables.
        </Typography>
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
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          This website is a work in progress. Below you will find more topics we
          will be covering as well as informative links on eating well in a
          variety of ways:
        </Typography>

        <div
          style={{
            maxWidth: "825px",
            backgroundColor: "#5D666F",
            borderRadius: "25px",
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
            lineHeight={1.7}
          >
            <ul>
              <li>
                What about fruit, fiber, whole grains, and physical activity?
              </li>

              <li>What about eating out?</li>

              <li>
                Farmers’ Market vouchers*: increasing ease of access for all
              </li>

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

              <li>
                Where do Livermore’s vegetables come from: local sourcing,
                healthy growing practices
              </li>

              <li>
                Getting our hands dirty: growing vegetables as a community
              </li>

              <li>
                Health at every size: calorie counting vs nutritional content{" "}
              </li>

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

              <li>
                For parents: getting our children involved with food, nutrition,
                health
              </li>

              <li>Pickling vegetables</li>

              <li>Mental health and nutrition</li>

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

              <li>
                <Link
                  href="https://dhss.delaware.gov/dph/dpc/eatright.html"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  Guidelines for Healthy Eating - Delaware Health and Social
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  Healthy Eating Plate | The Nutrition Source | Harvard TH Chan
                  School of Public Health
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.eatingwell.com/article/7938735/the-best-vegetables-for-weight-loss-according-to-dietitians/"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  The 12 Best Vegetables for Weight Loss, According to
                  Dietitians
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.eatingwell.com/category/4239/best-foods-for-weight-loss/"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  Best Foods for Weight-Loss | EatingWell
                </Link>
              </li>

              <li>
                <Link
                  href="https://ucfhealth.com/health-tips/three-of-the-healthiest-ways-to-cook-vegetables/"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  Three of the Healthiest Ways to Cook Vegetables | UCF Health
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.self.com/story/mediterranean-diet-cultural-foods"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  I'm an RD, and There's a Problem With the Mediterranean Diet
                  We Need to Talk About | SELF
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.eatright.org/food/planning-and-prep/snack-and-meal-ideas/5-quick-and-healthy-meals-without-using-the-stove"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  5 Quick and Healthy Meals without Using the Stove
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.mdanderson.org/publications/focused-on-health/SMART-goals-diet-and-nutrition.h10-1591413.html"
                  target="_blank"
                  color="secondary"
                >
                  {" "}
                  When setting diet and nutrition goals, be SMART | MD Anderson
                  Cancer Center
                </Link>
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
};

export default More;
