import retroPc from "./assets/image-retro-pcs.jpg";
import laptop from "./assets/image-top-laptops.jpg";
import gaming from "./assets/image-gaming-growth.jpg";

export const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "New" },
  { id: 3, title: "Popular" },
  { id: 4, title: "Categories" },
];

export const blogs = [
  {
    id: 1,
    newsImg: retroPc,
    title: " Reviving Retro PCs",
    description: " What happens when old PCs are given modern upgrades?",
  },
  {
    id: 2,
    newsImg: laptop,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    id: 3,
    newsImg: gaming,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

export const newNews = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    hasBorder: true,
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    hasBorder: true,
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Reviving Retro PCs",
    hasBorder: false,
    description: "What happens when old PCs are given modern upgrades?",
  },
];
