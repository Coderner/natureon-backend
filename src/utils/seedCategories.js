const mongoose = require("mongoose");
const Category = require("../models/Category");
const dotenv = require("dotenv");
dotenv.config();

const categories = [
  {
    name: "Plants",
    subcategories: ["Indoor Plants", "Outdoor Plants"],
  },
  {
    name: "Seeds",
    subcategories: ["Flower Seeds", "Vegetable Seeds", "Herb Seeds"],
  },
  {
    name: "Planters & Pots",
    subcategories: [
      "Terracotta Pots",
      "Plastic Pots",
      "Metal Planters",
      "Hanging Planters"
    ],
  },
  {
    name: "Stands",
    subcategories: ["Plant Stands", "Wooden Stands", "Metal Stand"],
  },
  {
    name: "Tools & Accessories",
    subcategories: ["Hanging Chains", "Sprayers", "Gardening Tools"],
  },
  {
    name: "Decor",
    subcategories: ["Bird Houses"],
  },
  {
    name: "Plant Care",
    subcategories: ["Fertilisers", "Plant Diet", "Soil"],
  },
];


const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    for (let cat of categories) {
      const existing = await Category.findOne({ name: cat.name });
      if (!existing) {
        await Category.create(cat);
        console.log(`Inserted: ${cat.name}`);
      } else {
        console.log(`Skipped (already exists): ${cat.name}`);
      }
    }

    console.log("Seeding complete");
  } catch (error) {
    console.error("Error seeding categories:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedCategories();
