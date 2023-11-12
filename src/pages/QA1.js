import { useState,useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent2";
import PortalPopup from "../components/PortalPopup";
import styles from "./QA1.module.css";

const QA1 = () => {
  const navigate = useNavigate();

  const groupContainer8Ref = useRef(null);
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);

  const onMZTextClick = useCallback(() => {
    navigate("/2");
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

  const onGroupContainer6Click = useCallback(() => {
    navigate("/31");
  }, [navigate]);

   const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.qa}>
        <div className={styles.qaChild} />
        <div className={styles.mzParent}>
          <div className={styles.mz} onClick={onMZTextClick}>
            MZ 커뮤니티
          </div>
          <div className={styles.mz1}>MZ 밈 찾아보기</div>
          <div className={styles.groupWrapper}>
            <div className={styles.groupParent}>
              <div className={styles.groupParent}>
                <div className={styles.groupChild} />
              </div>
              <div className={styles.qA}>{`Q & A`}</div>
            </div>
          </div>
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
        <div className={styles.top10}>자주하는 질문 TOP 10</div>
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
            <div className={styles.div}>도움말</div>
          </div>
        </div>
        <div className={styles.mz5}>MZ 커뮤니티</div>
        <div className={styles.rectangleGroup} onClick={onGroupContainer6Click}>
          <div className={styles.groupInner} />
          <div className={styles.div1}>글 작성하기</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleContainer} ref={groupContainer8Ref}
            onClick={openFramePopup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz6}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent}>
              <div className={styles.top}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz6}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent}>
              <div className={styles.top}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz6}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent}>
              <div className={styles.top}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz6}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent}>
              <div className={styles.top}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz10}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent2}>
              <div className={styles.top4}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz10}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent2}>
              <div className={styles.top4}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent5}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz10}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent2}>
              <div className={styles.top4}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent6}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz10}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent2}>
              <div className={styles.top4}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent7}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz10}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent2}>
              <div className={styles.top4}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div className={styles.rectangleParent8}>
            <div className={styles.rectangleDiv} />
            <div className={styles.mz10}>{`이채린은 MZ가 맞나요? `}</div>
            <div className={styles.topParent2}>
              <div className={styles.top4}>TOP</div>
              <div className={styles.groupChild1} />
            </div>
          </div>
        </div>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          bottom={10}
          relativeLayerRef={groupContainer8Ref}
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default QA1;
