import { useEffect, useState } from "react";

import StartScreen from "./screens/StartScreen";
import QuizScreen from "./screens/QuizScreen";
import {
  QUIZ_STAGES,
  QUIZ_TYPES,
  QUIZ_SETTINGS,
  TIMER_SETTINGS,
} from "./data/quizConfig";
import EndScreen from "./screens/EndScreen";

function App() {
  const [quizStage, setQuizStage] = useState(QUIZ_STAGES.StartScreen);
  const [quizType, setQuizType] = useState(QUIZ_TYPES.flag.value);
  const [difficultyType, setDifficultyType] = useState(
    QUIZ_SETTINGS.difficulty.easy,
  );
  const [questionsAmountType, setQuestionsAmountType] = useState(
    QUIZ_SETTINGS.questionsAmount.low,
  );
  const [countries, setCountries] = useState([]);
  const [quizCountries, setQuizCountries] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highStreak, setHighStreak] = useState(0);
  const [feedbackStage, setFeedbackStage] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentCountry = quizCountries[currentRound];
  const progress = (currentRound / questionsAmountType) * 100;

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
      answer.toLowerCase().replace(/\s+/g, "");

    if (response) {
      setScore((score) => score + 1);
      setStreak((streak) => streak + 1);
      setHighStreak((highStreak) =>
        streak + 1 >= highStreak ? streak + 1 : highStreak,
      );
    } else {
      setStreak(0);
    }
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

  useEffect(() => {
    if (!feedbackStage) return;
    const timeout = setTimeout(() => {
      const nextRound = currentRound + 1;
      const nextCountry = quizCountries[nextRound];

      setCurrentRound(nextRound);
      setAnswers(generateAnswers(nextCountry, quizCountries));
      if (currentRound === questionsAmountType - 1) {
        setQuizStage(QUIZ_STAGES.EndScreen);
      }
      setFeedbackStage(false);
    }, TIMER_SETTINGS.ANSWER_FEEDBACK_DURATION * 1000);
    return () => clearTimeout(timeout);
  }, [currentRound, feedbackStage, questionsAmountType, quizCountries]);

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
    setQuizStage(value);
    const selectedCountries = getShuffledCountries(countries, difficultyType);
    setQuizCountries(selectedCountries);
    setScore(0);
    setStreak(0);
    setCurrentRound(0);
    setAnswers(generateAnswers(selectedCountries[0], selectedCountries));
  }

  function handleNextRound(value) {
    if (feedbackStage) return;
    checkAnswer(currentCountry.name, value);
    setSelectedAnswer(value);
    setFeedbackStage(true);
  }

  if (quizStage === QUIZ_STAGES.StartScreen) {
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

  if (quizStage === QUIZ_STAGES.QuizScreen)
    return (
      <QuizScreen
        quizType={quizType}
        questionsAmountType={questionsAmountType}
        progress={progress}
        currentRound={currentRound}
        currentCountry={currentCountry}
        answers={answers}
        score={score}
        streak={streak}
        onIsPlaying={handleIsPlaying}
        onNextRound={handleNextRound}
        selectedAnswer={selectedAnswer}
        feedbackStage={feedbackStage}
      />
    );

  if (quizStage === QUIZ_STAGES.EndScreen)
    return (
      <EndScreen
        highStreak={highStreak}
        score={score}
        quizType={quizType}
        progress={progress}
        questionsAmountType={questionsAmountType}
        quizStage={quizStage}
        onIsPlaying={handleIsPlaying}
      />
    );
}
export default App;
