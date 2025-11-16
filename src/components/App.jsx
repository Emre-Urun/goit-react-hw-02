import { useState, useEffect } from "react";
import "./App.css";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  // localStorage'dan gelen değerlerle initial state
  const [values, setValues] = useState(() => {
    const stored = localStorage.getItem("feedbackValues");
    return stored ? JSON.parse(stored) : { good: 0, neutral: 0, bad: 0 };
  });

  // state değişince localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);

  // feedback artırma fonksiyonu
  function updateFeedback(feedbackType) {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  }

  // reset fonksiyonu
  function resetFeedback() {
    setValues({ good: 0, neutral: 0, bad: 0 });
  }

  // total artık neutral'ı saymıyor
  const total = values.good + values.bad;
  const positivePercentage =
    total > 0 ? Math.round((values.good / total) * 100) : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p className="description">
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options
        updateFeedback={updateFeedback}
        total={total}
        onReset={resetFeedback}
      />

      {total === 0 ? (
        <Notification message="No Feedback Yet" />
      ) : (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}

export default App;
