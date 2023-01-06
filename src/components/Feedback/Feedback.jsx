import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positivePercentage: 0 };

  handleCounter = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    }, this.handleSetStateCallback);
  };

  handleSetStateCallback = () => {
    this.countPositiveFeedbackPercentage();
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(() => {
      return {
        total: this.state.good + this.state.bad + this.state.neutral,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(() => {
      return {
        positivePercentage: Math.round(
          (this.state.good * 100) /
            (this.state.good + this.state.bad + this.state.neutral)
        ),
      };
    });
  };

  render() {
    return (
      <section className={css.feedback}>
        <h2 className={css.h2}>Please leave feedback</h2>
        <section className={css.buttons}>
          <button
            className={(css.button, css.good)}
            type="button"
            name="good"
            onClick={this.handleCounter}
          >
            Good
          </button>
          <button
            className={(css.button, css.neutral)}
            type="button"
            name="neutral"
            onClick={this.handleCounter}
          >
            Neutral
          </button>
          <button
            className={(css.button, css.bad)}
            type="button"
            name="bad"
            onClick={this.handleCounter}
          >
            Bad
          </button>
        </section>

        {this.state.total > 0 && (
          <section className={css.stats}>
            <h2 className={css.h2}>Statistics</h2>
            <ul className={css.list}>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.state.total} </li>
              <li>Positive feedback: {this.state.positivePercentage}%</li>
            </ul>
          </section>
        )}
      </section>
    );
  }
}

export default Feedback;
