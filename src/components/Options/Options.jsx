import css from "./Options.module.css";

function Options({ updateFeedback, total, onReset }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <button
          className={css.buttonGood}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          className={css.buttonNeutral}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button className={css.buttonBad} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
        <button
          className={`${css.buttonReset} ${total === 0 ? css.hidden : ""}`}
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Options;
