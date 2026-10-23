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
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);

  const currentCountry = quizCountries[currentRound];
  const progress = (currentRound / questionsAmountType) * 100;
  const answers = currentCountry
    ? generateAnswers(currentCountry, quizCountries)
    : [];

  function getShuffledCountries(countries, difficultyType) {
    const eligibleCountries = countries.filter(
      (country) =>
        country.population >= difficultyType.minPopulation &&
        country.population < difficultyType.maxPopulation,
    );

    const shuffled = [...eligibleCountries];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function generateAnswers(currentCountry, selectedCountries) {
    const wrongAnswers = selectedCountries
      .filter((country) => country.name !== currentCountry.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const answers = [currentCountry, ...wrongAnswers];

    return answers.sort(() => Math.random() - 0.5);
  }

  function checkAnswer(rightAnswer, answer) {
    const response =
      rightAnswer.toLowerCase().replace(/\s+/g, "") ===
      answer.toLowerCase().replace(/\s+/g, "")
        ? `Correct it was ${rightAnswer}`
        : `Wrong it was ${rightAnswer}`;
    console.log(response);
    return response;
  }

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
    setIsPlaying(value);
    const selectedCountries = getShuffledCountries(countries, difficultyType);

    const firstCountry = selectedCountries[0];
    generateAnswers(firstCountry, selectedCountries);

    setQuizCountries(selectedCountries);
  }

  function handleNextRound(value) {
    checkAnswer(currentCountry.name, value);

    if (currentRound !== questionsAmountType - 1) {
      const nextRound = currentRound + 1;
      const nextCountry = quizCountries[nextRound];
      generateAnswers(nextCountry, quizCountries);

      setCurrentRound(nextRound);
    } else {
      setQuizCountries([]);
      setCurrentRound(0);
      setIsPlaying(false);
    }
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
      quizType={quizType}
      questionsAmountType={questionsAmountType}
      progress={progress}
      quizCountries={quizCountries}
      currentCountry={currentCountry}
      answers={answers}
      onIsPlaying={handleIsPlaying}
      onNextRound={handleNextRound}
    />
  );
}
export default App;

//
