import { memo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = memo(({ onClose }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.componentChild} />
      <div className={styles.div}>마이페이지</div>
      <div className={styles.div1}>로그아웃</div>
      <div className={styles.componentItem} />
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.div2}>{`김창의 `}</div>
      <div className={styles.a12345678gmailcom}>a12345678@gmail.com</div>
    </div>
  );
});

export default GroupComponent;
