import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positivePercentage }) {
  let positiveColor = "#16a34a"; // yeşil default
  if (positivePercentage < 30) positiveColor = "#dc2626"; // kırmızı
  else if (positivePercentage < 50) positiveColor = "#b45309"; // koyu turuncu
  else if (positivePercentage < 70) positiveColor = "#f59e0b"; // turuncu

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p className={css.total}>Total (Good+Bad): {total}</p>
        <p className={css.positive} style={{ color: positiveColor }}>
          Positive Feedback: {positivePercentage}%
        </p>
      </div>
    </div>
  );
}

export default Feedback;
