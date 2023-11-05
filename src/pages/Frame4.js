import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Frame4.module.css";

const Frame4 = () => {
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const navigate = useNavigate();

  const onMZTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText2Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <>
      <div className={styles.div}>
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
        <img className={styles.child} alt="" src="/group-44.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.div2}>계정 관리</div>
          <div className={styles.div3}>비밀번호 변경</div>
          <div className={styles.div4} onClick={openFramePopup}>
            회원 탈퇴
          </div>
          <div className={styles.div5}>이메일 변경</div>
          <img className={styles.avatarIcon} alt="" src="/avatar2@2x.png" />
          <div className={styles.div6}>{`김창의 `}</div>
          <img className={styles.groupInner} alt="" src="/group-25.svg" />
          <div className={styles.a12345678gmailcom}>a12345678@gmail.com</div>
          <img className={styles.groupIcon} alt="" src="/group-43.svg" />
        </div>
        <div className={styles.groupParent}>
          <div
            className={styles.groupContainer}
            onClick={onGroupContainer5Click}
          >
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.parent}>
                <div className={styles.div7}>150</div>
                <div className={styles.div8}>좋아요</div>
                <div className={styles.div9}>싫어요</div>
                <div className={styles.div10}>5</div>
              </div>
              <div className={styles.div11}>킹받다</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.group}>
                <div className={styles.div12}>내가 등록한 단어</div>
                <img
                  className={styles.listAlphabetIcon}
                  alt=""
                  src="/listalphabet1.svg"
                />
              </div>
              <div className={styles.groupChild1} />
            </div>
          </div>
          <div
            className={styles.groupParent1}
            onClick={onGroupContainer10Click}
          >
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.container}>
                <div className={styles.div13}>150</div>
                <div className={styles.div14}>좋아요</div>
              </div>
              <div className={styles.div11}>너 뭐 돼?</div>
            </div>
            <div className={styles.groupParent2}>
              <div className={styles.parent1}>
                <div className={styles.div16}>댓글 단 글</div>
                <img
                  className={styles.messagesOneIcon}
                  alt=""
                  src="/messagesone1.svg"
                />
              </div>
              <div className={styles.groupChild3} />
            </div>
          </div>
          <div
            className={styles.groupParent3}
            onClick={onGroupContainer14Click}
          >
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.parent2}>
                <div className={styles.div17}>좋아요 한 글</div>
                <img className={styles.likeIcon} alt="" src="/like.svg" />
              </div>
              <div className={styles.groupChild5} />
            </div>
          </div>
        </div>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame4;
