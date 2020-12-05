import React, { Component } from "react";
import QuizEnd from "./QuizEnd.js";
import QuizQuestion from "./QuizQuestion.js";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 2 };
  }

  render() {
    const isQuizEnd = true;
    console.log(isQuizEnd, quizData.quiz_questions.length);
    const question = quizData.quiz_questions[this.state.quiz_position - 1];
    return (
      <div>
        {isQuizEnd && <QuizEnd />}
        <QuizQuestion quiz_question={question} />
      </div>
    );
  }
}

export default Quiz;
