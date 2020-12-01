import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <section>
          <p className="QuizQuestion">
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer, idx) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
