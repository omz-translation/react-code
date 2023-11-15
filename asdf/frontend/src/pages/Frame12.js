import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onFrameContainerClick}>
      <img className={styles.icon} alt="" src="/-1@2x.png" />
    </div>
  );
};

export default Frame;
