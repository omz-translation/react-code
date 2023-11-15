import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame5.module.css";

const Frame5 = () => {
  const navigate = useNavigate();

  const onMZTextClick = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  const onMZText2Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.text}>{` `}</div>
      <div className={styles.avatarParent}>
        <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
        <div className={styles.mz} onClick={onMZTextClick}>
          MZ
        </div>
        <div className={styles.groupChild} />
        <div className={styles.mz1} onClick={onMZText1Click}>
          MZ 번역기
        </div>
        <div className={styles.mz2} onClick={onMZText2Click}>
          MZ 사전
        </div>
        <div className={styles.mz3} onClick={onMZText3Click}>
          MZ 커뮤니티
        </div>
        <div className={styles.div1}>도움말</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.ellipseParent}>
          <div className={styles.groupItem} />
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <div className={styles.div2}>
          <span className={styles.txt}>
            <span className={styles.span}>신조어 등록</span>
            <span className={styles.span1}>{`이 `}</span>
            <span className={styles.span}>완료</span>
            <span className={styles.span1}>되었습니다.</span>
          </span>
        </div>
        <div className={styles.div3}>내가 등록한 신조어 확인하기</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer4Click}>
        <div className={styles.groupChild1} />
        <div className={styles.div4}>돌아가기</div>
      </div>
    </div>
  );
};

export default Frame5;