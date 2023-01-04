import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <h1 className="h1">React homework 02 Feedback</h1>
      <Feedback />

      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        <Statistics />
      </Section>
    </div>
  );
}

export default App;
