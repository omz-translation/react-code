import { useState, useRef, useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Frame10.module.css";

const Frame10 = () => {
  const photoImageRef = useRef(null);
  const [isGroupPopupOpen, setGroupPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openGroupPopup = useCallback(() => {
    setGroupPopupOpen(true);
  }, []);

  const closeGroupPopup = useCallback(() => {
    setGroupPopupOpen(false);
  }, []);

  const onMZText2Click = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img
        className={styles.photoIcon}
        alt=""
        src="/avatar1@2x.png"
        ref={photoImageRef}
        onClick={openGroupPopup}
      />
      <div className={styles.mz}>MZ</div>
      <div className={styles.curPage} />
      <div className={styles.mz1}>MZ 번역기</div>
      <div className={styles.mz2} onClick={onMZText2Click}>
        MZ 사전
      </div>
      <div className={styles.mz3} onClick={onMZText3Click}>
        MZ 커뮤니티
      </div>
      <div className={styles.div1}>도움말</div>
      <div className={styles.background}>
        <div className={styles.background1} />
        <div className={styles.backgroundInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.div2}>영어</div>
            <img className={styles.groupItem} alt="" src="/rectangle-12.svg" />
            <div className={styles.div3}>한국어</div>
          </div>
        </div>
        <div className={styles.backgroundChild}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.div2}>영어</div>
            <img className={styles.rectangleIcon} alt="" src="/rectangle-121.svg" />
            <div className={styles.div3}>한국어</div>
          </div>
        </div>
      </div>
      <button className={styles.transButton} id="trans_button_">
        <div className={styles.transButtonChild} />
        <div className={styles.div6}>번역하기</div>
      </button>
      <div className={styles.backgroundLeft} />
      <textarea className={styles.textarea} id="before_trans_" />
      <div className={styles.backgroundRight} />
      <textarea className={styles.textarea1} id="after_trans_" />
      <div className={styles.div7}>0/5000</div>
      <div className={styles.child} />
      <div className={styles.mz4}>MZ 용어 자세히 알아보기</div>
      <img className={styles.hateOffIcon} alt="" src="/group-213.svg" />
      <div className={styles.volumeNotionOff}>
        <img className={styles.volumeNoticeIcon} alt="" src="/volumenotice.svg" />
      </div>
      <button className={styles.volumeNotionOff1}>
        <img className={styles.volumeNoticeIcon} alt="" src="/volumenotice.svg" />
      </button>
      <div className={styles.copyOff}>
        <div className={styles.copyOffChild} />
        <div className={styles.copyOffItem} />
      </div>
      <div className={styles.copyOff1}>
        <div className={styles.copyOffChild} />
        <div className{styles.copyOffItem} />
      </div>
      <img className={styles.goodOffIcon} alt="" src="/good-off.svg" />
      <img className={styles.switchIcon} alt="" src="/group-12.svg" />
      <div className={styles.parent}>
        <div className={styles.div8}>킹받다</div>
        <div className={styles.div9}>
          <ul className={styles.ul}>
            짜증나는 기분이 들고, 상대방이 행하고 있는 말이나 행동이 마음에 들지 않다.
          </ul>
        </div>
      </div>
      {isGroupPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0)"
          placement="Top right"
          top={30}
          relativeLayerRef={photoImageRef}
          onOutsideClick={closeGroupPopup}
        >
          <GroupComponent onClose={closeGroupPopup} />
        </PortalPopup>
      )}
    </div>
  );
};

export default Frame10;
