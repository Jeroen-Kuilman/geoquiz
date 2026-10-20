import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import ContentBox from "./components/ContentBox";
import DifficultySelector from "./components/DifficultySelector";
import QuizTypeSelector from "./components/QuizTypeSelector";
import QuestionsAmountSelector from "./components/QuestionsAmountSelector";
import Footer from "./components/Footer";
function App() {
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

  return (
    <div className="app">
      <Header />
      <ContentBox>
        <DifficultySelector>
          <Button>Easy</Button>
          <Button>Medium</Button>
          <Button>Hard</Button>
        </DifficultySelector>

        <QuizTypeSelector></QuizTypeSelector>

        <QuestionsAmountSelector>
          <Button>5</Button>
          <Button>10</Button>
          <Button>20</Button>
        </QuestionsAmountSelector>
      </ContentBox>
      <Footer />
    </div>
  );
}

export default App;
