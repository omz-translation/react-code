import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/my");
  }, [navigate]);

  return (
    <div className={styles.componentParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.componentChild} />
        <div className={styles.div} onClick={onTextClick}>
          마이페이지
        </div>
        <div className={styles.div1}>로그아웃</div>
        <div className={styles.componentItem} />
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        <div className={styles.div2}>{`김창의 `}</div>
        <div className={styles.a12345678gmailcom}>a12345678@gmail.com</div>
      </div>
    </div>
  );
});

export default FrameComponent1;
