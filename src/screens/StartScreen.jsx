import { BsStack } from "react-icons/bs";
import { FaPlay, FaBalanceScaleLeft, FaMap } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";

import MenuHeader from "../components/MenuHeader";
import Button from "../components/Button";
import QuizType from "../components/QuizType";
import MenuOptions from "../components/MenuOptions";
import DifficultySelector from "../components/DifficultySelector";
import QuizTypeSelector from "../components/QuizTypeSelector";
import QuestionsAmountSelector from "../components/QuestionsAmountSelector";
import Footer from "../components/Footer";

import { QUIZ_TYPES, QUIZ_SETTINGS } from "../data/quizConfig";

export default function StartScreen({
  difficultyType,
  quizType,
  questionsAmountType,
  onQuizType,
  onDifficultyType,
  onQuestionsAmountType,
  onIsPlaying,
  fetchMessage,
  isLoading,
  countries,
}) {
  const { flag, capital } = QUIZ_TYPES;
  const { difficulty, questionsAmount } = QUIZ_SETTINGS;
  return (
    <div className="app menu screen">
      <MenuHeader />
      <MenuOptions
        playIcon={<FaPlay />}
        onClick={onIsPlaying}
        fetchMessage={fetchMessage}
        isLoading={isLoading}
        countries={countries}
      >
        <DifficultySelector difficultyIcon={<FaBalanceScaleLeft />}>
          <Button
            value={difficulty.easy}
            selected={difficultyType}
            onClick={onDifficultyType}
          >
            {difficulty.easy.label}
          </Button>
          <Button
            value={difficulty.medium}
            selected={difficultyType}
            onClick={onDifficultyType}
          >
            {difficulty.medium.label}
          </Button>
          <Button
            value={difficulty.hard}
            selected={difficultyType}
            onClick={onDifficultyType}
          >
            {difficulty.hard.label}
          </Button>
        </DifficultySelector>

        <QuizTypeSelector quizIcon={<FaMap />}>
          <QuizType
            icon={<flag.icon />}
            text={flag.label}
            value={flag.value}
            selected={quizType}
            onChange={onQuizType}
          />
          <QuizType
            icon={<capital.icon />}
            text={capital.label}
            value={capital.value}
            selected={quizType}
            onChange={onQuizType}
          />
        </QuizTypeSelector>

        <QuestionsAmountSelector amountIcon={<BsStack />}>
          <Button
            value={questionsAmount.low}
            selected={questionsAmountType}
            onClick={onQuestionsAmountType}
          >
            {questionsAmount.low}
          </Button>
          <Button
            value={questionsAmount.average}
            selected={questionsAmountType}
            onClick={onQuestionsAmountType}
          >
            {questionsAmount.average}
          </Button>
          <Button
            value={questionsAmount.high}
            selected={questionsAmountType}
            onClick={onQuestionsAmountType}
          >
            {questionsAmount.high}
          </Button>
        </QuestionsAmountSelector>
      </MenuOptions>
      <Footer icon={<FaEarthEurope />} />
    </div>
  );
}
