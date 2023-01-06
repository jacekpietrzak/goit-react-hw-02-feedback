import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={css.buttons}>
        <button
          className={(css.button, css.good)}
          type="button"
          name="good"
          onClick={this.props.onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={(css.button, css.neutral)}
          type="button"
          name="neutral"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={(css.button, css.bad)}
          type="button"
          name="bad"
          onClick={this.props.onLeaveFeedback}
        >
          Bad
        </button>
      </section>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
