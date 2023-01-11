import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import clsx from 'clsx';

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    console.log(options);
    return (
      <section className={css.buttons}>
        {options.map(option => {
          return (
            <button
              className={clsx(css.button, css[option])}
              type="button"
              name={option}
              onClick={this.props.onLeaveFeedback}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </section>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
