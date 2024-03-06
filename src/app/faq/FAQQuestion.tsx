import React, { useState } from "react";

import styles from "./FAQQuestion.module.scss";
import Button from "@/components/core/Button";

interface IProps {
  question: string;
  answer: string[];
}

const FAQQuestion = ({ question, answer }: IProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className={styles.entry}>
      <h2>
        {question}
        <Button onClick={() => setShowAnswer((v) => !v)}>
          <span className={`material-symbols-outlined ${styles.expandBtn}`}>
            {showAnswer ? "expand_less" : "expand_more"}
          </span>
        </Button>
      </h2>
      <section
        className={`${styles.answer} ${!showAnswer && styles.collapsed}`}
      >
        <div>
          {answer.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </section>
    </article>
  );
};

export default FAQQuestion;
