import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame8.module.css";

const Frame8 = () => {
  const navigate = useNavigate();

  const onQAClick = useCallback(() => {
    navigate("/qa");
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

  const onGroupContainer5Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.mzParent}>
        <div className={styles.mz}>MZ 밈 찾아보기</div>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.qA} onClick={onQAClick}>{`Q & A`}</div>
        <div className={styles.mz1}>MZ 커뮤니티</div>
      </div>
      <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
      <div className={styles.div1}>커뮤니티</div>
      <div className={styles.div2}>자유롭게 작성해보세요!</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.mzGroup}>
          <div className={styles.mz2} onClick={onMZText1Click}>
            MZ 번역기
          </div>
          <div className={styles.mz3} onClick={onMZText2Click}>
            MZ 사전
          </div>
          <div className={styles.mz4} onClick={onMZText3Click}>
            MZ 커뮤니티
          </div>
          <div className={styles.div3}>도움말</div>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.item} />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.child2} />
      <div className={styles.div4}>제목</div>
      <textarea
        className={styles.textarea}
        placeholder="단어명"
        id="comm_content_"
      />
      <textarea
        className={styles.textarea1}
        placeholder="제목"
        id="comm_title_"
      />
      <div className={styles.div5}>
        <span className={styles.txt}>
          <p className={styles.p}>유의사항</p>
          <p className={styles.p}>
            1. 작성하신 내용에 욕설·성희롱 등의 내용이 포함된 경우 관련법령에
            의거 처벌될 수 있습니다.
          </p>
        </span>
      </div>
      <div className={styles.mz5}>MZ 커뮤니티</div>
      <img className={styles.fileAdditionIcon} alt="" src="/fileaddition.svg" />
      <div className={styles.rectangleGroup} onClick={onGroupContainer5Click}>
        <div className={styles.groupChild1} />
        <div className={styles.div6}>{`등록하기 `}</div>
      </div>
    </div>
  );
};

export default Frame8;