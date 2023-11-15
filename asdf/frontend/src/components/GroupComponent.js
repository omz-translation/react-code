import { memo, useEffect } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = memo(({ onClose }) => {
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
    <div className={styles.rectangleParent} data-animate-on-scroll>
      <div className={styles.groupChild} />
      <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
      <div className={styles.div}>
        아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥
        있는거임 ;; 이거 신고해도 할 말 없지? 인정하면 개추해줘.
      </div>
      <div className={styles.idKin}>ID : Kin*****</div>
      <div className={styles.groupItem} />
      <div className={styles.parent}>
        <div className={styles.div1}>5</div>
        <img className={styles.goodTwoIcon} alt="" src="/goodtwo2.svg" />
      </div>
    </div>
  );
});

export default GroupComponent;
