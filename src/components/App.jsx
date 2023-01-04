import Feedback from './Feedback/Feedback';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export const App = () => {
  return (
    <div className="App">
      <h1 className="h1">React homework 02 Feedback</h1>
      <Feedback />

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state.options}
          onLeaveFeedback={this.state.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </Section>
    </div>
  );
};
