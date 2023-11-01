import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.div1}>
        <div className={styles.item} />
        <div className={styles.inner} />
        <img className={styles.groupIcon} alt="" src="/group-12.svg" />
        <div className={styles.groupDiv}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.div2}>영어</div>
            <img className={styles.groupItem} alt="" src="/rectangle-12.svg" />
            <div className={styles.div3}>한국어</div>
          </div>
        </div>
        <div className={styles.inner1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.div2}>영어</div>
            <img className={styles.groupItem} alt="" src="/rectangle-121.svg" />
            <div className={styles.div3}>한국어</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div6}>번역하기</div>
        </div>
        <img
          className={styles.volumeNoticeIcon}
          alt=""
          src="/volumenotice1.svg"
        />
        <img
          className={styles.volumeNoticeIcon1}
          alt=""
          src="/volumenotice2.svg"
        />
        <div className={styles.child1} />
        <div className={styles.child2} />
        <div className={styles.div7}>0/5000</div>
        <div className={styles.mz}>MZ 용어 자세히 알아보기</div>
        <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
        <img className={styles.goodTwoIcon} alt="" src="/goodtwo.svg" />
        <img className={styles.goodTwoIcon1} alt="" src="/goodtwo1.svg" />
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
        </div>
        <div className={styles.mz1}>MZ</div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild3} />
          <div className={styles.mzParent}>
            <div className={styles.mz2}>MZ 번역기</div>
            <div className={styles.mz3}>MZ 사전</div>
            <div className={styles.mz4}>MZ 커뮤니티</div>
            <div className={styles.div8}>도움말</div>
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
        </div>
      </div>
      <div className={styles.mzLoginContainer}>
        <span className={styles.mzLoginContainer1}>
          <span>MZ</span>
          <span className={styles.span}> 번역</span>
          <span> LOGIN</span>
        </span>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild6} />
        </div>
        <b className={styles.lOG}>L O G I N</b>
      </div>
      <img className={styles.child3} alt="" src="/group-125.svg" />
      <div className={styles.child4} />
      <div className={styles.username}>Username</div>
      <div className={styles.password}>Password</div>
      <img className={styles.lockIcon} alt="" src="/lock.svg" />
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild7} />
        <div className={styles.div9}>계정이 없으신가요?</div>
        <div className={styles.div10}>회원가입</div>
      </div>
    </div>
  );
};

export default Frame;
