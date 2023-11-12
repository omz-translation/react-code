import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

const Frame1 = () => {
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

  return (
    <div className={styles.div}>
      <img className={styles.child} alt="" src="/group-44.svg" />
      <div className={styles.mz} onClick={onMZTextClick}>
        MZ
      </div>
      <div className={styles.inner}>
        <div className={styles.mzParent}>
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
      </div>
      <div className={styles.item} />
      <div className={styles.parent}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.group}>
          <div
            className={styles.div2}
          >{`아니 킹받는 일 있음 들어봐  내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥 있는거임 ;; `}</div>
          <div className={styles.idKin}> ID : Kin*****</div>
          <div className={styles.container}>
            <div className={styles.div3}>150</div>
            <div className={styles.div4}>좋아요</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div3}>150</div>
            <div className={styles.div4}>좋아요</div>
          </div>
        </div>
      </div>
      <div className={styles.parent1}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.parent2}>
          <div
            className={styles.div7}
          >{`아니 킹받는 일 있음 들어봐  내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥 있는거임 ;; `}</div>
          <div className={styles.idKin}> ID : Kin*****</div>
          <div className={styles.parent3}>
            <div className={styles.div3}>150</div>
            <div className={styles.div4}>좋아요</div>
          </div>
        </div>
      </div>
      <div className={styles.parent4}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.parent2}>
          <div
            className={styles.div7}
          >{`아니 킹받는 일 있음 들어봐  내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥 있는거임 ;; `}</div>
          <div className={styles.idKin}> ID : Kin*****</div>
          <div className={styles.parent3}>
            <div className={styles.div3}>150</div>
            <div className={styles.div4}>좋아요</div>
          </div>
        </div>
      </div>
      <div className={styles.parent7}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.parent2}>
          <div
            className={styles.div7}
          >{`아니 킹받는 일 있음 들어봐  내가 어제 쌀국수를 먹었거든? 근데 면이 한가닥 있는거임 ;; `}</div>
          <div className={styles.idKin}> ID : Kin*****</div>
          <div className={styles.parent3}>
            <div className={styles.div3}>150</div>
            <div className={styles.div4}>좋아요</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.idKin4}>3분 전 | ID : Kin*****</div>
      <div className={styles.inner1}>
        <div className={styles.mzParent}>
          <div className={styles.div16}>댓글 단 글</div>
          <img
            className={styles.messagesOneIcon}
            alt=""
            src="/messagesone1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
