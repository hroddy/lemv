import pic7 from "../../assets/7.png";

import Link from "@mui/material/Link";

const introduction = {
  title: `Vegetable Servings`,
  id: `vegetable-servings`,
  image: pic7,
  alt: "tomatoes, carrots, green beans, zucchini and other assorted vegetables sit on a table in an outdoor market",
  author: `Morgan Roddy`,
  date: `10/22`,
  body: [
    <p>
      It can be easy to get lost in the complexity of serving sizes. There are
      many different recommendations by many different sources as to what counts
      as a serving and how many servings of any type of food we should be eating
      on a daily basis.
    </p>,

    <p>
      True nutrition information is easily lost in the overwhelming flood of
      untested hypotheses that pass for food facts on social media and in the
      news. While science is always an ongoing process and new discoveries are
      made all the time, comprehensive peer reviewed studies and reports should
      be the basis for recommendations, especially in topics associated with
      health and wellbeing such as nutrition. Using the factual information
      provided by trusted medical journals and reports, you can begin to gain
      clarity about your nutrition needs. The information in this post has been
      taken from the{" "}
      <Link
        target="_blank"
        href="https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf"
      >
        2020-2025 Dietary Guidelines for Americans
      </Link>{" "}
      created by the{" "}
      <Link target="_blank" href="https://www.usda.gov/">
        United States Department of Agriculture
      </Link>{" "}
      and the{" "}
      <Link target="_blank" href="https://www.hhs.gov/">
        U.S. Department of Health and Human Services
      </Link>
      .
    </p>,

    <h2>What is a serving?</h2>,

    <p>
      In general, <strong>one cup of vegetables is one serving</strong>. This ratio is not exact
      since vegetables vary in size and nutrition content. For example, when it
      comes to fresh leafy greens, two cups are considered one serving. For more
      detailed information on what counts as a serving size for different types
      of vegetables, <Link target="_blank" href="https://www.myplate.gov/eat-healthy/vegetables">check out the Vegetables section</Link> of the MyPlate website,
      created by the USDA and based on the 2020-2025 dietary guidelines. While
      the one cup equals one serving ratio is not perfect, it is the simplest
      ratio to work with when considering your vegetable intake.
    </p>,

    <h2>How many servings?</h2>,

    <p>
      On average, it is recommended for adults to eat <strong>three servings</strong> (cups) of
      vegetables each day. This number varies depending on age, gender, and
      other health conditions. It is important to not get overwhelmed by the
      amount of vegetables that we are expected to eat in a given day. Start
      small and with something manageable for you. If you snack between meals,
      try kale chips or an eggplant dip. If you are having a hard time fitting
      vegetables into your daily routine, try to focus on one meal a day and
      ensure that you are getting at least one full serving of vegetables with
      that meal. If you already eat vegetables with most meals, try making sure
      you are eating an adequate amount.
    </p>,
    <p>
      There are no simple answers to complicated questions about health; if you
      have any questions or concerns, consult your doctor and ask specific
      questions regarding your nutrition needs.
    </p>,
  ],
  tags: [
    `vegetable serving`,
    `serving`,
    `cup`,
    `daily`,
    `nutrition`,
    `amount`,
    `size`,
    `adult`,
  ],
};

export default introduction;
