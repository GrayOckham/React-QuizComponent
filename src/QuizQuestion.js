import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }
  handleClick(buttonText) {
    if (buttonText !== this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: true });
    } else {
      this.setState({ incorrectAnswer: false });
    }
    return buttonText === this.props.quiz_question.answer
      ? this.props.showNextQuestionHandler()
      : false;
  }
  render() {
    return (
      <main>
        <section>
          <p className="QuizQuestion">
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        {this.state.incorrectAnswer && <p className="error">Wrong answer</p>}
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer, idx) => (
              <QuizQuestionButton
                key={idx}
                button_text={answer}
                clickHandler={this.handleClick.bind(this)}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
