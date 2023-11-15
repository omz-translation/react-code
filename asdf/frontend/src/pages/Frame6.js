import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame6.module.css";

const Frame6 = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

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

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.child}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <textarea
          className={styles.textarea}
          placeholder="필수가 아닙니다."
          id="dic_word_ex_"
        />
      </div>
      <div className={styles.parent}>
        <div className={styles.div1}>단어명</div>
        <div className={styles.div2}>*</div>
      </div>
      <div className={styles.mz}>{`MZ 신조어 등록 `}</div>
      <div className={styles.div3}>{`예문 `}</div>
      <div className={styles.group}>
        <div className={styles.div4}>*</div>
        <div className={styles.div5}>의미</div>
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainer6Click}>
        <div className={styles.rectangleDiv} />
        <div className={styles.div6}>{`등록하기 `}</div>
      </div>
      <div className={styles.div7}>새로운 신조어를 등록해주세요 !</div>
      <div className={styles.avatarParent}>
        <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
        <div className={styles.mz1} onClick={onMZTextClick}>
          MZ
        </div>
        <div className={styles.groupChild1} />
        <div className={styles.mzParent}>
          <div className={styles.mz2} onClick={onMZText1Click}>
            MZ 번역기
          </div>
          <div className={styles.mz3} onClick={onMZText2Click}>
            MZ 사전
          </div>
          <div className={styles.mz4} onClick={onMZText3Click}>
            MZ 커뮤니티
          </div>
          <div className={styles.div8}>도움말</div>
        </div>
      </div>
      <textarea
        className={styles.textarea1}
        placeholder="단어명"
        id="dic_word_name_"
      />
      <textarea
        className={styles.textarea2}
        placeholder="의미"
        id="dic_word_mean_"
      />
    </div>
  );
};

export default Frame6;