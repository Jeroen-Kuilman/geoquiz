import { useEffect, useState } from "react";

import StartScreen from "./screens/StartScreen";
import QuizScreen from "./screens/QuizScreen";
import { QUIZ_TYPES, QUIZ_SETTINGS } from "./data/quizConfig";

function App() {
  const [quizType, setQuizType] = useState(QUIZ_TYPES.flag.value);
  const [difficultyType, setDifficultyType] = useState(
    QUIZ_SETTINGS.difficulty.easy,
  );
  const [questionsAmountType, setQuestionsAmountType] = useState(
    QUIZ_SETTINGS.questionsAmount.low,
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const [countries, setCountries] = useState([]);
  const [quizCountries, setQuizCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  const progress = (currentRound / questionsAmountType) * 100;

  useEffect(function () {
    const fetchCountryData = async function () {
      try {
        const [countryInfoRes, countryPopRes] = await Promise.all([
          fetch(
            "https://countriesnow.space/api/v0.1/countries/info?returns=name,flag,capital",
          ),
          fetch("https://countriesnow.space/api/v0.1/countries/population"),
        ]);

        if (!countryInfoRes.ok && !countryPopRes.ok)
          throw new Error("Complete fetch failure");

        if (!countryInfoRes.ok || !countryPopRes.ok)
          throw new Error("Partial fetch failure");

        const [countryInfoData, countryPopData] = await Promise.all([
          countryInfoRes.json(),
          countryPopRes.json(),
        ]);

        const populations = countryPopData.data;

        const countries = countryInfoData.data
          .map((country) => {
            const populationData = populations.find(
              (p) => p.country === country.name,
            );

            const latestPopulation =
              populationData?.populationCounts?.at(-1)?.value ?? null;

            return {
              name: country.name,
              flag: country.flag,
              capital: country.capital,
              population: Number(latestPopulation),
            };
          })
          .filter(
            (country) =>
              country.name &&
              country.capital &&
              country.flag &&
              country.population > 0,
          );
        console.log(countries);

        setCountries(countries);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCountryData();
  }, []);

  function handleQuizType(value) {
    setQuizType(value);
  }

  function handleDifficultyType(value) {
    setDifficultyType(value);
  }

  function handleQuestionsAmountType(value) {
    setQuestionsAmountType(value);
  }

  function handleIsPlaying(value) {
    const randomNumber = Math.floor(Math.random() * countries.length);

    setIsPlaying(value);
    setQuizCountries([...countries]);
    setCurrentCountry(randomNumber);
  }

  function handleCurrentRound() {
    setCurrentRound((currentRound) => currentRound + 1);
  }

  if (!isPlaying) {
    return (
      <StartScreen
        difficultyType={difficultyType}
        quizType={quizType}
        questionsAmountType={questionsAmountType}
        onQuizType={handleQuizType}
        onDifficultyType={handleDifficultyType}
        onQuestionsAmountType={handleQuestionsAmountType}
        onIsPlaying={handleIsPlaying}
      />
    );
  }
  return (
    <QuizScreen
      difficultyType={difficultyType}
      quizType={quizType}
      questionsAmountType={questionsAmountType}
      onIsPlaying={handleIsPlaying}
      progress={progress}
      quizCountries={quizCountries}
      currentCountry={currentCountry}
      onCurrentRound={handleCurrentRound}
    />
  );
}
export default App;

//
