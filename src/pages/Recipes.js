import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HowCarousel from "../components/How-Carousel";

import banner from "../assets/illustrations/veggiebanner.png";

const Recipes = () => {
  return (
    <div>
      <HowCarousel />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Recipes
        </Typography>

        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Diet has a huge impact on your heart and leading a heart healthy lifestyle can start with making small changes to your eating habits.Here are some heart health recipes. 
        </Typography>

        <Container align="center">
          <div
            style={{
              maxWidth: "650px",
              backgroundColor: "#97d600",
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
                  <Link
                    href="https://recipes.heart.org/en/collections/ingredients/vegetables"
                    target="_blank"
                  >
                    {" "}
                    Vegetables | American Heart Association Recipes{" "}
                  </Link>
                  <Typography>
                    A variety of vegetable-focused recipes by the American Heart
                    Association. The collection includes other categories such
                    as heart healthy snacks, main dishes, and slow cooker
                    options.
                  </Typography>
                </li>
                <p />
                <li>
                  <Link
                    href="https://www.eatingwell.com/recipes/18008/health-condition/heart-healthy/"
                    target="_blank"
                  >
                    {" "}
                    Heart-Healthy Recipes | EatingWell{" "}
                  </Link>
                  <Typography>
                    A collection of heart healthy recipes created by experts and
                    dietitian-approved.{" "}
                  </Typography>
                </li>
                <p />
                <li>
                  <Link
                    href="https://www.mayoclinic.org/healthy-lifestyle/recipes/heart-healthy-recipes/rcs-20077163"
                    target="_blank"
                  >
                    {" "}
                    Heart-Healthy recipes - Mayo Clinic{" "}
                  </Link>{" "}
                  <Typography>
                    These recipes, created by the Mayo Clinic’s staff, include
                    detailed nutritional information such as total calories and
                    fat content as well as suggestions for eating plans.
                  </Typography>
                </li>
                <p />
                <li>
                  <Link
                    href="https://www.heart.org/en/healthy-living/company-collaboration/heart-check-certification"
                    target="_blank"
                  >
                    {" "}
                    Heart-Check Certification | American Heart Association{" "}
                  </Link>{" "}
                  <Typography>
                  The American Heart Association (AHA) certifies products and recipes as heart healthy through their Heart Check Certification Process.
                  </Typography>
                </li>
              </ul>
            </Typography>
          </div>
        </Container>

        <Container
          align="center"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          <img src={banner} alt="illustrated vegetables" />
        </Container>

        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Which vegetables should I eat?
        </Typography>

        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Eating a diverse variety of vegetables is most recommended. Luckily in
          California, we have almost year round access to many amazing types of
          vegetables. Frequent guests of the produce sections in town are often
          joined with more seasonal options as well. Trying a couple different
          varieties can often be the best way to find your favorites. Some
          vegetables popular with us are brussel sprouts, zucchini, parsnips,
          kale, cauliflower, cucumbers, and of course garlic and onions! <p />
        </Typography>

        <Container
          align="center"
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "none" },
          }}
        >
          <img height="125px" alt="illustrated vegetables" src={banner} />
        </Container>
        <Container
          align="center"
          sx={{
            display: { xs: "none", sm: "block", md: "none", lg: "none" },
          }}
        >
          <img height="70px" alt="illustrated vegetables" src={banner} />
        </Container>
        <Container
          align="center"
          sx={{
            display: { xs: "block", sm: "none", md: "none", lg: "none" },
          }}
        >
          <img height="60px" alt="illustrated vegetables" src={banner} />
        </Container>

        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          How do I cook them?
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          <Link
            target="_blank"
            href="https://ucfhealth.com/health-tips/three-of-the-healthiest-ways-to-cook-vegetables/"
          >
            The healthiest ways to cook vegetables
          </Link>{" "}
          are methods that preserve most of the nutrients inside the vegetable.
          Therefore, quick cooking methods such as steaming or stir-frying are
          considered the healthiest. While these methods can be delicious, they
          are by no means the only options. Mixing up how you cook vegetables
          will make them more interesting and sometimes easier to prepare! Some
          vegetables are amazing roasted in a hot oven, such as{" "}
          <Link
            target="_blank"
            href="https://cookieandkate.com/roasted-sweet-potatoes-recipe/"
          >
            sweet potatoes
          </Link>{" "}
          or (surprisingly) broccoli. Slow cookers can help break down heartier
          vegetables into soups or sauces and save time.
          <p />
          Adding more vegetables to what you are already cooking is the simplest
          way to increase your vegetable intake. For example, adding a handful
          of spinach into a casserole your family loves, making that cheese
          omelet into a vegetable cheese omelet, adding a few different
          vegetables to a salad you enjoy making, or working towards a more{" "}
          <Link
            target="_blank"
            href="https://www.merckconnect.com/static/pdf/balanced-plate-resource.pdf"
          >
            balanced plate.
          </Link>{" "}
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
          Links from the paragraphs:
          <ul>
            <li>
              <Link
                href="https://ucfhealth.com/health-tips/three-of-the-healthiest-ways-to-cook-vegetables/"
                target="_blank"
              >
                {" "}
                Three of the Healthiest Ways to Cook Vegetables | UCF Health{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                href="https://cookieandkate.com/roasted-sweet-potatoes-recipe/"
                target="_blank"
              >
                {" "}
                Perfect Roasted Sweet Potatoes Recipe - Cookie and Kate{" "}
              </Link>{" "}
            </li>
            <li>
              <Link
                href="https://www.merckconnect.com/static/pdf/balanced-plate-resource.pdf"
                target="_blank"
              >
                {" "}
                A BALANCED PLATE{" "}
              </Link>{" "}
            </li>
          </ul>
        </Typography>
        <hr />

        <Typography
          color="primary"
          fontSize={12}
          variant="body1"
          mt={5}
          mb={4}
          align="center"
          justify="center"
        >
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
};

export default Recipes;
