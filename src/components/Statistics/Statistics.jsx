import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <section className={css.statistics}>
        <ul className={css.list}>
          <li>Good: {this.props.good}</li>
          <li>Neutral: {this.props.neutral}</li>
          <li>Bad: {this.props.bad}</li>
          <li>Total: {this.props.total} </li>
          <li>Positive feedback: {this.props.positivePercentage}%</li>
        </ul>
      </section>
    );
  }
}

export default Statistics;
