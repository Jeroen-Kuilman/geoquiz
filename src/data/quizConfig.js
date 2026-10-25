import { FaFlag, FaCity } from "react-icons/fa";
export const QUIZ_TYPES = {
  flag: {
    value: "flag",
    label: "Flag recognition",
    icon: FaFlag,
  },
  capital: {
    value: "capital",
    label: "Capital cities",
    icon: FaCity,
  },
};

const easyPopulation = 25_000_000;
const mediumPopulation = 5_000_000;
const hardPopulation = 0;

export const QUIZ_SETTINGS = {
  difficulty: {
    easy: {
      label: "Easy",
      minPopulation: easyPopulation,
      maxPopulation: Infinity,
    },
    medium: {
      label: "Medium",
      minPopulation: mediumPopulation,
      maxPopulation: easyPopulation,
    },
    hard: {
      label: "Hard",
      minPopulation: hardPopulation,
      maxPopulation: mediumPopulation,
    },
  },
  questionsAmount: {
    low: 10,
    average: 20,
    high: 30,
  },
};

export const BROKEN_SVG_LIST = ["Sao Tome and Principe"];
