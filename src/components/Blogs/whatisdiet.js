import pic12 from "../../assets/12.png";

const blog1 = {
  title: "What is diet?",
  image: pic12,
  alt: `a pair of hands cut a bell pepper on a cutting board`,
  body: [
    `Eating vegetables is a key step to strong nutrition but there are many elements to a healthy diet.`,
    `“Diets” as we think of them in our culture are usually restrictive, defined by "no's" and the 
      labeling of some foods as bad. Dieting often involves shame and guilt. In this sense, going on a 
      diet is something you do temporarily, not because you want to but because you should. 
      While that is onedefinition of diet, it is not the way we use the word.`,
    `Another definition of diet is “the kinds of food that a person, animal, or 
      community habitually eats.” According to this definition, our diet is our everyday eating habits.
       For example, my overall eating habits usually include pastas, stir frys, salads, lentils, bread, chocolate, and lots more. 
       More specifically, I habitually have yogurt or avocado toast for breakfast. I also tend to crave something sweet after dinner. 
       These would all be considered elements of my diet.`,
    `Some people are very aware of their diet and may have specific
    limitations based on allergies or intolerances. Sometimes our
    diet is heavily influenced by our environments, such as who we
    live with, where we buy our food, or what we can afford.`,
    `If you are looking to change your diet, the first step is to
    start paying attention. Keeping a one week food journal can be
    a great way to start thinking about your overall food habits.
    Please note that this does not mean counting calories, which
    can be harmful rather than helpful. Once you have a good
    understanding of what you usually eat, you can decide what, if
    anything, you want to change.`,
    `Another good way to start thinking about food differently is
    UCLA’s free Mindful Eating Series. This is “a collaboration
    between UCLA CAPS and UCLA RISE that features pre-recorded
    content and resources related to food, eating, and body image.
    Resources offered here will provide information about how to
    improve your relationship with food and your body, inclusive
    of opportunities to practice new skills while eating a meal.”
    This series includes videos, podcasts, books, and other
    resources relating to our relationships with food.`,
    `In the end, you should enjoy what you eat! If you are looking
    for ways to add more vegetables into your diet, check out our
    How page: www.lemv.org/how
       ${(
         <a href="www.lemv.org/how" target="_blank">
           // www.lemv.org/how //{" "}
         </a>
       )}`,
  ],
  tags: ["diet", "mindful eating", `how`, `free`, `ucla`],
};

export default blog1;
