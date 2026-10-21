import { useEffect, useState } from "react";
import {
  FaFlag,
  FaCity,
  FaPlay,
  FaBalanceScaleLeft,
  FaMap,
} from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";

import MenuHeader from "./components/MenuHeader";
import Button from "./components/Button";
import QuizType from "./components/QuizType";
import MenuOptions from "./components/MenuOptions";
import DifficultySelector from "./components/DifficultySelector";
import QuizTypeSelector from "./components/QuizTypeSelector";
import QuestionsAmountSelector from "./components/QuestionsAmountSelector";
import Footer from "./components/Footer";

function App() {
  const [quizType, setQuizType] = useState("flag");
  const [difficultyType, setDifficultyType] = useState("easy");
  const [questionsAmountType, setQuestionsAmountType] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(function () {
    async function fetchCountryData() {
      try {
        const res = await fetch(
          `https://api.restcountries.com/countries/v5?q=canada`,
          {
            headers: {
              Authorization: "Bearer rc_live_a6971c2bf92044378f4e56358c460f3b",
            },
          },
        );

        if (!res.ok) throw new Error("TEST");

        const data = await res.json();

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
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
  }

  if (!isPlaying) {
    return (
      <div className="menu">
        <MenuHeader />
        <MenuOptions playIcon={<FaPlay />} onClick={handleIsPlaying}>
          <DifficultySelector difficultyIcon={<FaBalanceScaleLeft />}>
            <Button
              value={"easy"}
              selected={difficultyType}
              onClick={handleDifficultyType}
            >
              Easy
            </Button>
            <Button
              value={"medium"}
              selected={difficultyType}
              onClick={handleDifficultyType}
            >
              Medium
            </Button>
            <Button
              value={"hard"}
              selected={difficultyType}
              onClick={handleDifficultyType}
            >
              Hard
            </Button>
          </DifficultySelector>

          <QuizTypeSelector quizIcon={<FaMap />}>
            <QuizType
              icon={<FaFlag />}
              text={"Flag recognition"}
              value={"flag"}
              selected={quizType}
              onChange={handleQuizType}
            />
            <QuizType
              icon={<FaCity />}
              text={"Capital cities"}
              value={"capital"}
              selected={quizType}
              onChange={handleQuizType}
            />
          </QuizTypeSelector>

          <QuestionsAmountSelector amountIcon={<BsStack />}>
            <Button
              value={5}
              selected={questionsAmountType}
              onClick={handleQuestionsAmountType}
            >
              5
            </Button>
            <Button
              value={10}
              selected={questionsAmountType}
              onClick={handleQuestionsAmountType}
            >
              10
            </Button>
            <Button
              value={20}
              selected={questionsAmountType}
              onClick={handleQuestionsAmountType}
            >
              20
            </Button>
          </QuestionsAmountSelector>
        </MenuOptions>
        <Footer icon={<FaEarthEurope />} />
      </div>
    );
  }
  return (
    <div className="quiz">
      <QuizHeader />
      <QuizStats />
      <div>{quizType}</div>
      <QuizPrompt />
      <QuizChoices />
      <Footer />
    </div>
  );
}
export default App;
