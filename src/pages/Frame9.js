import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame9.module.css";

const Frame9 = () => {
  const navigate = useNavigate();

  const onQAClick = useCallback(() => {
    navigate("/qa");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText2Click = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/4");
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
      <div className={styles.inner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.div1}>검색하실 키워드를 입력해주세요.</div>
          <img className={styles.groupInner} alt="" src="/group-31.svg" />
        </div>
      </div>
      <div className={styles.item} />
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.mzGroup}>
          <div className={styles.mz2} onClick={onMZText1Click}>
            MZ 번역기
          </div>
          <div className={styles.mz3} onClick={onMZText2Click}>
            MZ 사전
          </div>
          <div className={styles.mz4}>MZ 커뮤니티</div>
          <div className={styles.div2}>도움말</div>
        </div>
      </div>
      <div className={styles.mz5}>MZ 커뮤니티</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
      </div>
      <div className={styles.child1} />
      <div className={styles.mz6}>MZ 커뮤니티</div>
      <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
      <b className={styles.b1}>{`아니 킹받는 일 있음 들어봐 `}</b>
      <b className={styles.b2}>{`아니 킹받는 일 있음 들어봐 `}</b>
      <b className={styles.b3}>{`아니 킹받는 일 있음 들어봐 `}</b>
      <b className={styles.b4}>{`아니 킹받는 일 있음 들어봐 `}</b>
      <div className={styles.div3}>
        아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥
        있는거임 ;; 이거 신고해도 할 말 없...
      </div>
      <div className={styles.div4}>
        아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥
        있는거임 ;; 이거 신고해도 할 말 없...
      </div>
      <div className={styles.div5}>
        아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥
        있는거임 ;; 이거 신고해도 할 말 없...
      </div>
      <div className={styles.div6}>
        아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥
        있는거임 ;; 이거 신고해도 할 말 없...
      </div>
      <div className={styles.div7}>
        아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥
        있는거임 ;; 이거 신고해도 할 말 없...
      </div>
      <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
      <div className={styles.idKin1}>3분 전 | ID : Kin*****</div>
      <div className={styles.idKin2}>3분 전 | ID : Kin*****</div>
      <div className={styles.idKin3}>3분 전 | ID : Kin*****</div>
      <div className={styles.idKin4}>3분 전 | ID : Kin*****</div>
      <div className={styles.groupParent}>
        <div className={styles.hotParent}>
          <div className={styles.hot}>HOT</div>
          <div className={styles.groupChild5} />
        </div>
        <b className={styles.b5}>{`김민수 폼 미쳤다이 `}</b>
        <div className={styles.div8}>아니 어제 올린 인스타 게시물 봤...</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer9Click}>
        <div className={styles.groupChild6} />
        <div className={styles.div9}>글 작성하기</div>
      </div>
    </div>
  );
};

export default Frame9;
