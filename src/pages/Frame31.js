import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame31.module.css";

const Frame31 = () => {
  const navigate = useNavigate();

  const onMZTextClick = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onMZText2Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/qa");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
      <div className={styles.div1}>문의 사항</div>
      <div className={styles.div2}>
        문의 사항이 있으시다면 여기에 남겨주세요.
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.mzParent}>
          <div className={styles.mz} onClick={onMZTextClick}>
            MZ 번역기
          </div>
          <div className={styles.mz1} onClick={onMZText1Click}>
            MZ 사전
          </div>
          <div className={styles.mz2} onClick={onMZText2Click}>
            MZ 커뮤니티
          </div>
          <div className={styles.div3}>도움말</div>
        </div>
      </div>
      <div className={styles.mzGroup}>
        <div className={styles.mz3} onClick={onMZText3Click}>
          MZ 커뮤니티
        </div>
        <div className={styles.mz4}>MZ 밈 찾아보기</div>
        <div className={styles.groupWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.groupParent}>
              <div className={styles.groupItem} />
            </div>
            <div className={styles.qA}>{`Q & A`}</div>
          </div>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.item} />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.child2} />
      <div className={styles.div4}>제목</div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer7Click}>
        <div className={styles.groupChild1} />
        <div className={styles.div5}>{`등록하기 `}</div>
      </div>
      <div className={styles.div6}>
        <span className={styles.txt}>
          <p className={styles.p}>유의사항</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              {" "}
              보내주신 의견은 서비스 개선을 위해 소중히 활용하고 있습니다.
            </li>
            <li>
              작성하신 내용에 욕설·성희롱 등의 내용이 포함된 경우 관련법령에
              의거 처벌될 수 있습니다.
            </li>
          </ul>
        </span>
      </div>
      <div className={styles.mz5}>MZ 커뮤니티</div>
      <img className={styles.fileAdditionIcon} alt="" src="/fileaddition.svg" />
      <textarea className={styles.textarea} placeholder="제목" id="qa_title_" />
      <textarea
        className={styles.textarea1}
        placeholder="내용을 입력하세요."
        id="qa_content_"
      />
    </div>
  );
};

export default Frame31;
