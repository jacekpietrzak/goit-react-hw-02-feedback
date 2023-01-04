import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {},
      onLeaveFeedback: {},
    };
  }

  handleCounter = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    }, this.handleSetStateCallback);
  };

  handleSetStateCallback = () => {
    console.log(this.state);
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
    );
  }
}

export default FeedbackOptions;
