import { createSlice } from "@reduxjs/toolkit";
import { DefaultOptionType } from "antd/es/select";

type FilterName = "platform" | "category" | "sort-by";

type FilterItem = {
  key: FilterName;
  placeholder: string;
  currentValue: string;
  options: DefaultOptionType[];
};

export type Filters = {
  [key in FilterName]: FilterItem;
};

const platformOptions: DefaultOptionType[] = [
  {
    label: "PC",
    value: "pc",
  },
  {
    label: "Browser",
    value: "browser",
  },
  {
    label: "All",
    value: "all",
  },
];
const categoryOptions: DefaultOptionType[] = [
  {
    label: "MMORPG",
    value: "mmorpg",
  },
  {
    label: "Shooter",
    value: "shooter",
  },
  {
    label: "PvP",
    value: "pvp",
  },
  {
    label: "MMOFPS",
    value: "mmofps",
  },
  {
    label: "Strategy",
    value: "strategy",
  },
  {
    label: "MOBA",
    value: "moba",
  },
  {
    label: "Racing",
    value: "racing",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Social",
    value: "social",
  },
  {
    label: "Sandbox",
    value: "sandbox",
  },
  {
    label: "Open-world",
    value: "open-world",
  },
  {
    label: "Survival",
    value: "survival",
  },
  {
    label: "PvE",
    value: "pve",
  },
  {
    label: "Pixel",
    value: "pixel",
  },
  {
    label: "Voxel",
    value: "voxel",
  },
  {
    label: "Zombie",
    value: "zombie",
  },
  {
    label: "Turn-based",
    value: "turn-based",
  },
  {
    label: "First-person",
    value: "first-person",
  },
  {
    label: "Third-person",
    value: "third-Person",
  },
  {
    label: "Top-down",
    value: "top-down",
  },
  {
    label: "Tank",
    value: "tank",
  },
  {
    label: "Space",
    value: "space",
  },
  {
    label: "Sailing",
    value: "sailing",
  },
  {
    label: "Side-scroller",
    value: "side-scroller",
  },
  {
    label: "Superhero",
    value: "superhero",
  },
  {
    label: "Permadeath",
    value: "permadeath",
  },
  {
    label: "Card",
    value: "card",
  },
  {
    label: "Battle-royale",
    value: "battle-royale",
  },
  {
    label: "MMO",
    value: "mmo",
  },
  {
    label: "MMOTPS",
    value: "mmotps",
  },
  {
    label: "3D",
    value: "3d",
  },
  {
    label: "2D",
    value: "2d",
  },
  {
    label: "Anime",
    value: "anime",
  },
  {
    label: "Fantasy",
    value: "fantasy",
  },
  {
    label: "Sci-fi",
    value: "sci-fi",
  },
  {
    label: "Fighting",
    value: "fighting",
  },
  {
    label: "Action-rpg",
    value: "action-rpg",
  },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Military",
    value: "military",
  },
  {
    label: "Martial-arts",
    value: "martial-arts",
  },
  {
    label: "Flight",
    value: "flight",
  },
  {
    label: "Low-spec",
    value: "low-spec",
  },
  {
    label: "Tower-defense",
    value: "tower-defense",
  },
  {
    label: "Horror",
    value: "horror",
  },
  {
    label: "MMORTS",
    value: "mmorts",
  },
];
const sortOptions: DefaultOptionType[] = [
  {
    label: "Release-date",
    value: "release-date",
  },
  {
    label: "Popularity",
    value: "popularity",
  },
  {
    label: "Relevance",
    value: "relevance",
  },
];

const filters: Filters = {
  platform: {
    key: "platform",
    placeholder: "Platform",
    currentValue: "",
    options: platformOptions,
  },
  category: {
    key: "category",
    placeholder: "Category",
    currentValue: "",
    options: categoryOptions,
  },
  "sort-by": {
    key: "sort-by",
    placeholder: "Sort",
    currentValue: "",
    options: sortOptions,
  },
};

const initialState: Filters = {
  ...filters,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterCurrentValue(
      state: Filters,
      { payload }: { payload: { value: string; key: keyof Filters } }
    ) {
      const { key, value } = payload;
      state[key].currentValue = value || "";
      return;
    },
  },
});

export default filtersSlice.reducer;
