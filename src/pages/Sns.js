import styles from "./Sns.module.css";

const Sns = () => {
  return (
    <div className={styles.sns}>
      <div className={styles.div}>
        <div className={styles.child} />
        <div className={styles.item} />
        <img className={styles.inner} alt="" src="/group-12.svg" />
        <div className={styles.groupDiv}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.div1}>영어</div>
            <img className={styles.groupItem} alt="" src="/rectangle-12.svg" />
            <div className={styles.div2}>한국어</div>
          </div>
        </div>
        <div className={styles.inner1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.div1}>영어</div>
            <img className={styles.groupItem} alt="" src="/rectangle-121.svg" />
            <div className={styles.div2}>한국어</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div5}>번역하기</div>
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
        <div className={styles.div6}>0/5000</div>
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
            <div className={styles.div7}>도움말</div>
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.backgroundChild} />
        <div className={styles.mzLoginContainer}>
          <span className={styles.mzLoginContainer1}>
            <span>MZ</span>
            <span className={styles.span}> 번역</span>
            <span> LOGIN</span>
          </span>
        </div>
      </div>
      <div className={styles.loginButton}>
        <div className={styles.kakao}>
          <div className={styles.kakaoChild} />
          <div className={styles.ellipseParent}>
            <div className={styles.ellipseDiv} />
            <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
          </div>
          <div className={styles.div8}>카카오톡으로 계속하기</div>
        </div>
        <div className={styles.google}>
          <div className={styles.googleChild} />
          <div className={styles.googleItem} />
          <div className={styles.div8}>구글로 계속하기</div>
          <div className={styles.googleInner} />
          <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
        </div>
        <div className={styles.naver}>
          <div className={styles.naverChild} />
          <div className={styles.div8}>네이버로 계속하기</div>
          <img className={styles.naverItem} alt="" src="/group-148.svg" />
        </div>
        <div className={styles.face}>
          <div className={styles.faceChild} />
          <div className={styles.div8}>페이스북으로 계속하기</div>
          <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        </div>
        <div className={styles.apple}>
          <div className={styles.appleChild} />
          <div className={styles.ellipseGroup}>
            <div className={styles.groupChild6} />
            <img
              className={styles.pxAppleLogosvg1Icon}
              alt=""
              src="/487pxapple-logosvg-1@2x.png"
            />
          </div>
          <div className={styles.apple1}>Apple로 계속하기</div>
        </div>
      </div>
    </div>
  );
};

export default Sns;
