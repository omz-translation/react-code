import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame2.module.css";

const Frame2 = () => {
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
      <div className={styles.parent}>
        <div className={styles.div2}>내가 등록한 단어</div>
        <img
          className={styles.listAlphabetIcon}
          alt=""
          src="/listalphabet.svg"
        />
      </div>
      <div className={styles.item} />
      <div className={styles.group}>
        <div className={styles.div3}>150</div>
        <div className={styles.div4}>좋아요</div>
        <div className={styles.div5}>싫어요</div>
        <div className={styles.div6}>5</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div3}>150</div>
        <div className={styles.div4}>좋아요</div>
        <div className={styles.div5}>싫어요</div>
        <div className={styles.div6}>5</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.div3}>150</div>
        <div className={styles.div4}>좋아요</div>
        <div className={styles.div5}>싫어요</div>
        <div className={styles.div6}>5</div>
      </div>
      <div className={styles.parent1}>
        <div className={styles.div3}>150</div>
        <div className={styles.div4}>좋아요</div>
        <div className={styles.div5}>싫어요</div>
        <div className={styles.div6}>5</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.parent2}>
        <b className={styles.b}>킹받다</b>
        <div className={styles.div19}>{`단어의 뜻 `}</div>
        <div className={styles.div20}>너 자꾸 그렇게 킹받게 하지 말아줄래?</div>
        <div className={styles.idKin}> ID : Kin*****</div>
      </div>
      <div className={styles.parent3}>
        <b className={styles.b1}>킹받다</b>
        <div className={styles.div21}>{`단어의 뜻 `}</div>
        <div className={styles.div20}>너 자꾸 그렇게 킹받게 하지 말아줄래?</div>
        <div className={styles.idKin1}> ID : Kin*****</div>
      </div>
      <div className={styles.parent4}>
        <b className={styles.b}>킹받다</b>
        <div className={styles.div19}>{`단어의 뜻 `}</div>
        <div className={styles.div20}>너 자꾸 그렇게 킹받게 하지 말아줄래?</div>
        <div className={styles.idKin}> ID : Kin*****</div>
      </div>
      <div className={styles.parent5}>
        <b className={styles.b1}>킹받다</b>
        <div className={styles.div21}>{`단어의 뜻 `}</div>
        <div className={styles.div20}>너 자꾸 그렇게 킹받게 하지 말아줄래?</div>
        <div className={styles.idKin1}> ID : Kin*****</div>
      </div>
      <div className={styles.idKin4}>3분 전 | ID : Kin*****</div>
    </div>
  );
};

export default Frame2;
