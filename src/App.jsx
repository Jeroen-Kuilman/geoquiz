import { useEffect, useState } from "react";

import StartScreen from "./screens/StartScreen";
import QuizScreen from "./screens/QuizScreen";
import {
  QUIZ_STAGES,
  QUIZ_TYPES,
  QUIZ_SETTINGS,
  TIMER_SETTINGS,
  BROKEN_SVG_LIST,
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
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highStreak, setHighStreak] = useState(0);
  const [feedbackStage, setFeedbackStage] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSpeed, setAnswerSpeed] = useState(0);
  const [speedScore, setSpeedScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchMessage, setFetchMessage] = useState("");

  const currentCountry = quizCountries[currentRound];
  const progress = (currentRound / questionsAmountType) * 100;

  const maxCorrectAnswerPoints =
    questionsAmountType * QUIZ_SETTINGS.scoreValues.correctAnswer;
  const maxStreakBonus =
    questionsAmountType * QUIZ_SETTINGS.scoreValues.streakBonus;
  const maxSpeedPoints =
    questionsAmountType * QUIZ_SETTINGS.scoreValues.answerSpeedFast.points;
  const maximumScore = maxCorrectAnswerPoints + maxStreakBonus + maxSpeedPoints;

  useEffect(function () {
    const fetchCountryData = async function () {
      setIsLoading(true);
      setFetchMessage("");
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
              flag: BROKEN_SVG_LIST[country.name] ?? country.flag,
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
        setFetchMessage(err.message);
      } finally {
        setIsLoading(false);
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
      setCorrectAnswers((correctAnswers) => correctAnswers + 1);
      setStreak((streak) => streak + 1);
      setHighStreak((highStreak) =>
        streak + 1 >= highStreak ? streak + 1 : highStreak,
      );
      setSpeedScore((speedScore) => speedScore + getSpeedPoints(answerSpeed));
    } else {
      setStreak(0);
    }
    return response;
  }

  function getSpeedPoints(timeRemaining) {
    const { answerSpeedFast, answerSpeedAverage, answerSpeedSlow } =
      QUIZ_SETTINGS.scoreValues;
    if (timeRemaining >= answerSpeedFast.time) return answerSpeedFast.points;
    else if (timeRemaining >= answerSpeedAverage.time)
      return answerSpeedAverage.points;
    else if (timeRemaining >= answerSpeedSlow.time)
      return answerSpeedSlow.points;
  }

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
    if (isLoading || countries.length === 0) return;
    setQuizStage(value);
    const selectedCountries = getShuffledCountries(countries, difficultyType);
    setQuizCountries(selectedCountries);
    setCorrectAnswers(0);
    setStreak(0);
    setCurrentRound(0);
    setHighStreak(0);
    setAnswers(generateAnswers(selectedCountries[0], selectedCountries));
    setSpeedScore(0);
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
        fetchMessage={fetchMessage}
        isLoading={isLoading}
        countries={countries}
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
        correctAnswers={correctAnswers}
        streak={streak}
        onIsPlaying={handleIsPlaying}
        onNextRound={handleNextRound}
        selectedAnswer={selectedAnswer}
        feedbackStage={feedbackStage}
        onTimeLeft={setAnswerSpeed}
      />
    );

  if (quizStage === QUIZ_STAGES.EndScreen)
    return (
      <EndScreen
        highStreak={highStreak}
        correctAnswers={correctAnswers}
        quizType={quizType}
        progress={progress}
        questionsAmountType={questionsAmountType}
        quizStage={quizStage}
        onIsPlaying={handleIsPlaying}
        speedScore={speedScore}
        maximumScore={maximumScore}
      />
    );
}
export default App;
