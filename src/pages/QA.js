import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QA.module.css";

const QA = () => {
  const navigate = useNavigate();

  const onMZTextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onMZText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText4Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className={styles.qa}>
      <div className={styles.qaChild} />
      <div className={styles.mzParent}>
        <div className={styles.mz} onClick={onMZTextClick}>
          MZ 커뮤니티
        </div>
        <div className={styles.mz1}>MZ 밈 찾아보기</div>
        <div className={styles.groupWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.groupParent}>
              <div className={styles.groupChild} />
            </div>
            <div className={styles.qA}>{`Q & A`}</div>
          </div>
        </div>
      </div>
      <div className={styles.qaItem} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.parent}>
          <div className={styles.div}>{`김형진은 천재인가요? `}</div>
          <div className={styles.topParent}>
            <div className={styles.top}>TOP</div>
            <div className={styles.groupInner} />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.groupChild1} />
          </div>
        </div>
      </div>
      <div className={styles.qaInner} />
      <div className={styles.qaChild1} />
      <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
      <div className={styles.top10}>자주하는 질문 TOP 10</div>
      <div className={styles.mz2}>{`이채린은 MZ가 맞나요? `}</div>
      <div className={styles.div1}>
        맞습니다. 왜냐하면 ,,, 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵
        이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵
        이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵
        저러쿵 이라쿵 저러쿵 이기 때문입니다.
      </div>
      <div className={styles.a}>A.</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.mzGroup}>
          <div className={styles.mz3} onClick={onMZText2Click}>
            MZ 번역기
          </div>
          <div className={styles.mz4} onClick={onMZText3Click}>
            MZ 사전
          </div>
          <div className={styles.mz5} onClick={onMZText4Click}>
            MZ 커뮤니티
          </div>
          <div className={styles.div2}>도움말</div>
        </div>
      </div>
      <div className={styles.topGroup}>
        <div className={styles.top}>TOP</div>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.qaChild2} />
      <div className={styles.mz6}>MZ 커뮤니티</div>
      <div
        className={styles.rectangleParent1}
        onClick={onGroupContainer12Click}
      >
        <div className={styles.groupChild6} />
        <div className={styles.div3}>글 작성하기</div>
      </div>
    </div>
  );
};

export default QA;
