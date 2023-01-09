import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import { Component } from 'react';

class App extends Component {
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
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleCounter} />
        </Section>
        {this.state.total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
