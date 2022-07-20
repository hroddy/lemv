import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HowCarousel from "../components/How-Carousel";

import banner from "../assets/illustrations/veggiebanner.png";

const How = () => {
  return (
    <div>
      <HowCarousel />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
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
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          <img src={banner} alt="illustrated vegetables"/>
        </Container>
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
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          More Recipes!
        </Typography>
        
        <Container align="center">
          <div
            style={{
              maxWidth: "550px",
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
            >
              <ul>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/veggie-loaded-sloppy-joes-recipe"
                    target="_blank"
                  >
                    {" "}
                    Veggie-Loaded Sloppy Joes Recipe{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/slow-cooker-minestrone-soup-recipe"
                    target="_blank"
                  >
                    {" "}
                    Slow-Cooker Minestrone Soup Recipe{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/pinto-bean-and-roasted-vegetable-tacos-recipe"
                    target="_blank"
                  >
                    {" "}
                    Pinto Bean and Roasted Vegetable Tacos Recipe{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/roasted-beet-hummus-recipe"
                    target="_blank"
                  >
                    {" "}
                    Roasted Beet Hummus Recipe{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/grilled-eggplant-pesto-pizza-recipe"
                    target="_blank"
                  >
                    {" "}
                    Grilled Eggplant Pesto Pizza Recipe{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/tomato-cucumber-and-bell-pepper-gazpacho-recipe"
                    target="_blank"
                  >
                    {" "}
                    Tomato, Cucumber and Bell Pepper Gazpacho Recipe{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/no-shell-vegetarian-taco-salad-recipe"
                    target="_blank"
                  >
                    {" "}
                    No-Shell Vegetarian Taco Salad Recipe{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://www.eatright.org/food/planning-and-prep/recipes/tuscan-bean-salad-with-tomatoes-and-arugula-recipe"
                    target="_blank"
                  >
                    {" "}
                    Tuscan Bean Salad with Tomatoes and Arugula Recipe{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="https://www.eatingwell.com/recipes/18256/ingredients/vegetables/"
                    target="_blank"
                  >
                    {" "}
                    Healthy Vegetable Recipes | EatingWell{" "}
                  </Link>{" "}
                </li>
              </ul>
            </Typography>
          </div>
        </Container>
        <hr />

        <Typography
          color="primary"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Links from the Paragraphs:
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

export default How;
