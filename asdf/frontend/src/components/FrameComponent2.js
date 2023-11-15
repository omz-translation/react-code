import styles from "./FrameComponent2.module.css";

const FrameComponent = ({ onClose }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.a}>A.</div>
        <div className={styles.q}>Q.</div>
        <div className={styles.div}>
          맞습니다. 왜냐하면 ,,, 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵
          이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵
          이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 저러쿵 이러쿵 저러쿵
          이러쿵 저러쿵 이라쿵 저러쿵 이기 때문입니다.
        </div>
        <div className={styles.mz}>{`이채린은 MZ가 맞나요? `}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
