import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
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
        <div className={styles.div2}>좋아요</div>
        <div className={styles.div3}>좋아요</div>
        <div className={styles.div4}>좋아요</div>
        <div className={styles.div5}>좋아요</div>
      </div>
      <div className={styles.group}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.container}>
          <div className={styles.div6}>
            아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
            한가닥 있는거임 ;; 이거 신....
          </div>
          <div className={styles.idKin}> ID : Kin*****</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.container}>
          <div className={styles.div6}>
            아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
            한가닥 있는거임 ;; 이거 신....
          </div>
          <div className={styles.idKin}> ID : Kin*****</div>
        </div>
      </div>
      <div className={styles.parent2}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.container}>
          <div className={styles.div6}>
            아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
            한가닥 있는거임 ;; 이거 신....
          </div>
          <div className={styles.idKin}> ID : Kin*****</div>
        </div>
      </div>
      <div className={styles.parent4}>
        <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
        <div className={styles.container}>
          <div className={styles.div6}>
            아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
            한가닥 있는거임 ;; 이거 신....
          </div>
          <div className={styles.idKin}> ID : Kin*****</div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.idKin4}>3분 전 | ID : Kin*****</div>
      <div className={styles.parent6}>
        <div className={styles.div10}>좋아요 한 글</div>
        <img className={styles.likeIcon} alt="" src="/like.svg" />
      </div>
    </div>
  );
};

export default Frame;