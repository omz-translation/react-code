import React, { useState, useRef, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Frame10.module.css";

const API_ENDPOINT = '/api/translate'; // Flask 어플리케이션의 API 엔드포인트 URL

const Frame10 = () => {
  const [inputText, setInputText] = useState(""); // 원문 입력 상태 추가
  const [translation, setTranslation] = useState(""); // 번역 결과 상태 추가
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
    navigate("/1");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const handleTranslateClick = useCallback(async () => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (response.ok) {
        const data = await response.json();
        let cleanedTranslation = data.translated_text;
        cleanedTranslation = cleanedTranslation.replace('<pad>', '').replace('</s>', '');
        setTranslation(cleanedTranslation); // 번역 결과 상태 업데이트
        console.log("번역 결과:", cleanedTranslation);
        
      } else {
        console.error("번역 실패");
      }
    } catch (error) {
      console.error("번역 요청 오류:", error);
    }
  }, [inputText]);
  

  return(
    <>
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
      <button className={styles.transButton} onClick={handleTranslateClick}>
        <div className={styles.transButtonChild} />
        <div className={styles.div6}>번역하기</div>
      </button>
      <div className={styles.backgroundLeft} />
      <textarea
        className={styles.textarea}
        id="before_trans_"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // 입력 텍스트 업데이트
      />
      <div className={styles.backgroundRight} />
      <textarea
        className={styles.textarea1}
        id="after_trans_"
        value={translation}
        readOnly
      />
      <div className={styles.child} />
      <div className={styles.mz4}>MZ 용어 자세히 알아보기</div>
      <img className={styles.hateOffIcon} alt="" src="/group-213.svg" />
      <div className={styles.volumeNotionOff}>
          <img
            className={styles.volumeNoticeIcon}
            alt=""
            src="/volumenotice.svg"
          />
        </div>
        <button className={styles.volumeNotionOff1}>
          <img
            className={styles.volumeNoticeIcon}
            alt=""
            src="/volumenotice.svg"
          />
        </button>
        <div className={styles.copyOff}>
          <div className={styles.copyOffChild} />
          <div className={styles.copyOffItem} />
        </div>
        <div className={styles.copyOff1}>
          <div className={styles.copyOffChild} />
          <div className={styles.copyOffItem} />
        </div>
        <img className={styles.goodOffIcon} alt="" src="/good-off.svg" />
        <img className={styles.switchIcon} alt="" src="/group-12.svg" />
        <div className={styles.parent}>
          <div className={styles.div7}>킹받다</div>
          <div className={styles.div8}>
            <ul
              className={styles.ul}
            >{`짜증나는 기분이 들고, 상대방이 행하고 있는 말이나 행동이 마음에 들지 않다. `}</ul>
          </div>
        </div>
      </div>
      {isGroupPopupOpen && (
        <PortalPopup
          placement="Top right"
          top={-450}
          right={-20}
          relativeLayerRef={photoImageRef}
          onOutsideClick={closeGroupPopup}
        >
          <FrameComponent1 onClose={closeGroupPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame10;
