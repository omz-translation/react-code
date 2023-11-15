import { useEffect } from "react";
import styles from "./AnswerDrawer.module.css";

const AnswerDrawer = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.answerDrawer} data-animate-on-scroll>
      <div className={styles.answerDrawerChild} />
      <div className={styles.a}>A.</div>
      <div className={styles.q}>Q.</div>
      <div className={styles.div}>
        맞습니다. 왜냐하면 ,,, 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵
        이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵
        이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이라쿵 저러쿵 이기 때문입니다.
      </div>
      <div className={styles.mz}>{`이채린은 MZ가 맞나요? `}</div>
    </div>
  );
};

export default AnswerDrawer;
