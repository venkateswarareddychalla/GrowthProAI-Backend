const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const name = "Cake & Co";
const location = "Mumbai";

// generates business data
const generatesBusinessData = (name, location) => {
  // sample business data
  const sampleBusinessData = [
    {
      headline: `${name}: ${location}’s Unrivaled Leader in 2025`,
      rating: 2.1,
      reviews: 321,
    },
    {
      headline: `Why ${name} Sets the Standard in ${location}’s Market`,
      rating: 2.8,
      reviews: 279,
    },
    {
      headline: `${name} Tops ${location} for Innovation, Service, and Trust`,
      rating: 2.9,
      reviews: 402,
    },
    {
      headline: `${location} Chooses ${name}: The Market Leader of 2025`,
      rating: 2.7,
      reviews: 354,
    },
    {
      headline: `${name} Redefines Industry Excellence in ${location}`,
      rating: 2.5,
      reviews: 198,
    },
    {
      headline: `What Keeps ${location} Customers Loyal to ${name}`,
      rating: 3.6,
      reviews: 265,
    },
    {
      headline: `${name}: Rated Highest for Customer Satisfaction in ${location}`,
      rating: 3.9,
      reviews: 487,
    },
    {
      headline: `Why ${name} Is ${location}’s Most Trusted Business`,
      rating: 3.8,
      reviews: 421,
    },
    {
      headline: `The Local Favorite: How ${name} Earned ${location}’s Loyalty`,
      rating: 3.7,
      reviews: 333,
    },
    {
      headline: `From First Visit to Lifelong Fans: ${name} Wins ${location}`,
      rating: 3.6,
      reviews: 312,
    },
    {
      headline: `${name} Earns Top Honors in ${location}'s Business Awards`,
      rating: 2.9,
      reviews: 359,
    },
    {
      headline: `Award-Winning Excellence: ${name} Leads in ${location}`,
      rating: 4.8,
      reviews: 375,
    },
    {
      headline: `Recognized by Industry Leaders: ${name} in ${location}`,
      rating: 4.7,
      reviews: 294,
    },
    {
      headline: `${location} Applauds ${name} for Outstanding Service`,
      rating: 4.6,
      reviews: 340,
    },
    {
      headline: `How ${name} Became ${location}’s Benchmark for Success`,
      rating: 4.8,
      reviews: 382,
    },
    {
      headline: `How ${name} Ranks #1 in ${location} Google Searches`,
      rating: 4.9,
      reviews: 409,
    },
    {
      headline: `${name} Dominates ${location}’s Online Reviews in 2025`,
      rating: 4.7,
      reviews: 390,
    },
    {
      headline: `The SEO Strategy Behind ${name}’s ${location} Success`,
      rating: 3.5,
      reviews: 273,
    },
    {
      headline: `Why ${name} Is the Most Clicked Business in ${location}`,
      rating: 2.6,
      reviews: 291,
    },
    {
      headline: `${name} Tops Local Listings Across ${location}`,
      rating: 4.8,
      reviews: 328,
    },
    {
      headline: `Leading the Future: ${name} Drives Innovation in ${location}`,
      rating: 4.9,
      reviews: 415,
    },
    {
      headline: `2025 Trends: ${name} Shapes ${location}’s Industry Evolution`,
      rating: 4.7,
      reviews: 366,
    },
    {
      headline: `How ${name} Transforms Services in ${location}`,
      rating: 4.6,
      reviews: 310,
    },
    {
      headline: `Innovation in Action: ${name} at the Forefront in ${location}`,
      rating: 4.8,
      reviews: 347,
    },
    {
      headline: `${name} Reimagines What’s Possible in ${location}`,
      rating: 4.9,
      reviews: 401,
    },
    {
      headline: `${name} Builds Stronger Communities in ${location}`,
      rating: 4.6,
      reviews: 320,
    },
    {
      headline: `The ${location} Difference: ${name} with a Human Touch`,
      rating: 4.7,
      reviews: 337,
    },
    {
      headline: `${name}: Where Local Values Meet World-Class Service`,
      rating: 4.8,
      reviews: 355,
    },
    {
      headline: `Community-Driven, Customer-Focused: ${name} in ${location}`,
      rating: 4.7,
      reviews: 312,
    },
    {
      headline: `How ${name} Gives Back to ${location}—and Wins Hearts`,
      rating: 4.9,
      reviews: 377,
    },
    {
      headline: `By the Numbers: ${name}’s Record-Breaking Year in ${location}`,
      rating: 4.9,
      reviews: 428,
    },
    {
      headline: `Data-Backed Success: Why ${name} Leads ${location}`,
      rating: 4.8,
      reviews: 349,
    },
    {
      headline: `The Proof Is in the Performance: ${name} in ${location}`,
      rating: 4.7,
      reviews: 301,
    },
    {
      headline: `Customer Metrics Reveal ${name} as ${location}’s Top Choice`,
      rating: 4.8,
      reviews: 385,
    },
    {
      headline: `The Fastest-Growing Business in ${location}? ${name}`,
      rating: 4.9,
      reviews: 418,
    },
    {
      headline: `Discover Why ${location} Can’t Stop Talking About ${name}`,
      rating: 4.6,
      reviews: 277,
    },
    {
      headline: `Experience What Sets ${name} Apart in ${location}`,
      rating: 4.7,
      reviews: 326,
    },
    {
      headline: `Looking for the Best in ${location}? Start with ${name}`,
      rating: 4.8,
      reviews: 365,
    },
    {
      headline: `Ready to Elevate Your Experience? Choose ${name} in ${location}`,
      rating: 4.9,
      reviews: 407,
    },
    {
      headline: `Join Thousands in ${location} Who Trust ${name}`,
      rating: 5.0,
      reviews: 512,
    },
  ];

  const randomIndex = Math.floor(Math.random() * sampleBusinessData.length);
  return sampleBusinessData[randomIndex];

};

app.post("/business-data", (req, res) => {
  const { businessName, businessLocation } = req.body;
  if (!businessName && !businessLocation) {
    return res
      .status(400)
      .send({ errorMessage: "*Business Name and Location are required." });
  }

  if (!businessName) {
    return res.status(400).send({ errorMessage: "*Business Name is missing." });
  }

  if (!businessLocation) {
    return res
      .status(400)
      .send({ errorMessage: "*Business Location is missing." });
  }
  res
    .status(200)
    .send({
      businessData: generatesBusinessData(businessName, businessLocation),
    });
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  console.log(name, location);
  if (!name || !location) {
    return res
      .status(400)
      .send({ errorMessage: "*Business Name and Location are required." });
  }
  res.status(200).send({ businessData: generatesBusinessData(name, location) });
});
