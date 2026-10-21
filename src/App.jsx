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

import Header from "./components/Header";
import Button from "./components/Button";
import QuizType from "./components/QuizType";
import ContentBox from "./components/ContentBox";
import DifficultySelector from "./components/DifficultySelector";
import QuizTypeSelector from "./components/QuizTypeSelector";
import QuestionsAmountSelector from "./components/QuestionsAmountSelector";
import Footer from "./components/Footer";

function App() {
  const [quizType, setQuizType] = useState("flag");
  const [difficultyType, setDifficultyType] = useState("easy");
  const [questionsAmountType, setQuestionsAmountType] = useState(5);

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

  return (
    <div className="app">
      <Header />
      <ContentBox playIcon={<FaPlay />}>
        <DifficultySelector difficultyIcon={<FaBalanceScaleLeft />}>
          <Button
            value={"easy"}
            selectedValue={difficultyType}
            onClick={handleDifficultyType}
          >
            Easy
          </Button>
          <Button
            value={"medium"}
            selectedValue={difficultyType}
            onClick={handleDifficultyType}
          >
            Medium
          </Button>
          <Button
            value={"hard"}
            selectedValue={difficultyType}
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
            selectedValue={quizType}
            onQuizType={handleQuizType}
          />
          <QuizType
            icon={<FaCity />}
            text={"Capital cities"}
            value={"capital"}
            selectedValue={quizType}
            onQuizType={handleQuizType}
          />
        </QuizTypeSelector>

        <QuestionsAmountSelector amountIcon={<BsStack />}>
          <Button
            value={5}
            selectedValue={questionsAmountType}
            onClick={handleQuestionsAmountType}
          >
            5
          </Button>
          <Button
            value={10}
            selectedValue={questionsAmountType}
            onClick={handleQuestionsAmountType}
          >
            10
          </Button>
          <Button
            value={20}
            selectedValue={questionsAmountType}
            onClick={handleQuestionsAmountType}
          >
            20
          </Button>
        </QuestionsAmountSelector>
      </ContentBox>
      <Footer icon={<FaEarthEurope />} />
    </div>
  );
}

export default App;
