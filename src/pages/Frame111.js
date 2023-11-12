import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame111.module.css";

const Frame111 = () => {
  const navigate = useNavigate();

  const onRegisButtonContainerClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onMZTextClick = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.regisButton} onClick={onRegisButtonContainerClick}>
        <div className={styles.regisButtonChild} />
        <div className={styles.mz}>MZ 신조어 등록</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div1}>단어의 유래</div>
          <div className={styles.groupWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.div2}>
                <p
                  className={styles.p}
                >{`유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 `}</p>
                <p
                  className={styles.p}
                >{`유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 `}</p>
                <p
                  className={styles.p}
                >{`유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 `}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <p
            className={styles.p}
          >{`유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 `}</p>
          <p
            className={styles.p}
          >{`유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 `}</p>
          <p
            className={styles.p}
          >{`유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 유래 `}</p>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.div4}>
            1) 단어의 예문 예문 예문 예문 예문 예문 예문 예문 예문 예문 예문
            예문 예문 예문 예문
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameGroup}>
          <div className={styles.groupItem} />
          <div className={styles.frame}>
            <div className={styles.b}>
              2) 단어의 예문 예문 예문 예문 예문 예문 예문 예문 예문 예문 예문
              예문 예문 예문 예문
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.div6}>단어의 의미</div>
            <div className={styles.groupDiv}>
              <b className={styles.b}>1)</b>
            </div>
          </div>
          <div className={styles.wrapper1}>
            <div className={styles.b}>
              3) 단어의 예문 예문 예문 예문 예문 예문 예문 예문 예문 예문 예문
              예문 예문 예문 예문
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <img
          className={styles.volumeNoticeIcon}
          alt=""
          src="/volumenotice3.svg"
        />
        <div className={styles.div8}>{`단어 발음 `}</div>
        <div className={styles.div9}>단어</div>
      </div>
      <div className={styles.text}>{` `}</div>
      <div className={styles.searchbar}>
        <div className={styles.groupChild} />
        <textarea className={styles.search} placeholder="Search" id="search_" />
        <img className={styles.searchbuttonIcon} alt="" src="/group-31.svg" />
      </div>
      <b className={styles.b1}>이채린 폼 미쳤다</b>
      <b className={styles.b2}>-</b>
      <div className={styles.div10}>1</div>
      <img className={styles.photoIcon} alt="" src="/avatar1@2x.png" />
      <div className={styles.mz1} onClick={onMZTextClick}>
        MZ
      </div>
      <div className={styles.curPage} />
      <div className={styles.mz2} onClick={onMZText1Click}>
        MZ 번역기
      </div>
      <div className={styles.mz3}>MZ 사전</div>
      <div className={styles.mz4} onClick={onMZText3Click}>
        MZ 커뮤니티
      </div>
      <div className={styles.div11}>도움말</div>
    </div>
  );
};

export default Frame111;
