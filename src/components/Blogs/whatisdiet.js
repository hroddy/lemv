import pic12 from "../../assets/12.png";
import Link from "@mui/material/Link";

const blog1 = {
  title: "What is diet?",
  id: `what-is-diet`,
  image: pic12,
  alt: `a pair of hands cut a bell pepper on a cutting board`,
  author: `Morgan Roddy`,
  date: `08/22`,
  body: [
    <p>
      Eating vegetables is a key step to strong nutrition but there are many
      elements to a healthy diet.
    </p>,
    <p>
      “Diets” as we think of them in our culture are usually restrictive,
      defined by nos and the labeling of some foods as bad. Dieting often
      involves shame and guilt. In this sense, going on a diet is something you
      do temporarily, not because you want to but because you should. While that
      is one definition of diet, it is not the way we use the word.
    </p>,
    <p>
      Another definition of diet is “the kinds of food that a person, animal, or
      community habitually eats.” According to this definition, our diet is our
      everyday eating habits. For example, my overall eating habits usually
      include pastas, stir frys, salads, lentils, bread, chocolate, and lots
      more. More specifically, I habitually have yogurt or avocado toast for
      breakfast. I also tend to crave something sweet after dinner. These would
      all be considered elements of my diet.
    </p>,
    <p>
      Some people are very aware of their diet and may have specific limitations
      based on allergies or intolerances. Sometimes our diet is heavily
      influenced by our environments, such as who we live with, where we buy our
      food, or what we can afford.
    </p>,
    <p>
      If you are looking to change your diet, a good first step can be to start
      paying closer attention. Keeping a{" "}
      <Link
        href="https://www.cdc.gov/healthyweight/pdf/food_diary_cdc.pdf"
        target="_blank"
      >
        one week food journal
      </Link>{" "}
      can be a great way to start thinking about your overall food habits. Once
      you have a good understanding of what you usually eat, you can decide
      what, if anything, you want to change.
    </p>,
    <p>
      Another good way to start thinking about food differently is UCLA's free{" "}
      <Link
        href="https://risecenter.ucla.edu/virtual-library/mindful-eating"
        target="_blank"
      >
        Mindful Eating Series
      </Link>
      . This is "a collaboration between UCLA CAPS and UCLA RISE that features
      pre-recorded content and resources related to food, eating, and body
      image. Resources offered here will provide information about how to
      improve your relationship with food and your body, inclusive of
      opportunities to practice new skills while eating a meal." This series
      includes videos, podcasts, books, and other resources relating to our
      relationships with food.
    </p>,
    <p>
      In the end, you should enjoy what you eat! If you are looking for ways to
      add more vegetables into your diet, check out our How page:{" "}
      <Link href="/how" target="_blank">
        www.lemv.org/how{" "}
      </Link>
    </p>,
    <p>
      Links:
      <ul>
        <li>
          <Link
            href="https://www.cdc.gov/healthyweight/pdf/food_diary_cdc.pdf"
            target="_blank"
          >
            CDC Food Journal
          </Link>
        </li>
        <li><Link
            href="https://risecenter.ucla.edu/virtual-library/mindful-eating"
            target="_blank"
          >
            Mindful Eating Series
          </Link></li>
      </ul>
    </p>,
  ],
  tags: ["diet", "mindful eating", `how`, `free`, `ucla`, `cdc`, `food journal`],
};

export default blog1;
