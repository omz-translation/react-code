import { useState, useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./Frame9.module.css";

const Frame9 = () => {
  const [isGroupOpen, setGroupOpen] = useState(false);
  const navigate = useNavigate();

  const openGroup = useCallback(() => {
    setGroupOpen(true);
  }, []);

  const closeGroup = useCallback(() => {
    setGroupOpen(false);
  }, []);

  const onQAClick = useCallback(() => {
    navigate("/qa");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText2Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  return (
    <>
      <div className={styles.div}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent} onClick={openGroup}>
            <div className={styles.groupChild} />
            <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
            <div className={styles.div1}>
              아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
              한가닥 있는거임 ;; 이거 신고해도 할 말 없...
            </div>
            <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />
            <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
            <div className={styles.div1}>
              아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
              한가닥 있는거임 ;; 이거 신고해도 할 말 없...
            </div>
            <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild} />
            <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
            <div className={styles.div1}>
              아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
              한가닥 있는거임 ;; 이거 신고해도 할 말 없...
            </div>
            <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild} />
            <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
            <div className={styles.div1}>
              아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
              한가닥 있는거임 ;; 이거 신고해도 할 말 없...
            </div>
            <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild} />
            <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
            <div className={styles.div1}>
              아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
              한가닥 있는거임 ;; 이거 신고해도 할 말 없...
            </div>
            <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild} />
            <b className={styles.b}>{`아니 킹받는 일 있음 들어봐 `}</b>
            <div className={styles.div1}>
              아니 킹받는 일 있음 들어봐 내가 어제 쌀국수를 먹었거든? 근데 면이
              한가닥 있는거임 ;; 이거 신고해도 할 말 없...
            </div>
            <div className={styles.idKin}>3분 전 | ID : Kin*****</div>
          </div>
        </div>
        <div className={styles.child} />
        <div className={styles.mzParent}>
          <div className={styles.mz}>MZ 밈 찾아보기</div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupChild3} />
          </div>
          <div className={styles.qA} onClick={onQAClick}>{`Q & A`}</div>
          <div className={styles.mz1}>MZ 커뮤니티</div>
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
        <div className={styles.inner}>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild4} />
            <div className={styles.div7}>검색하실 키워드를 입력해주세요.</div>
            <img className={styles.groupIcon} alt="" src="/group-31.svg" />
          </div>
        </div>
        <div className={styles.item} />
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild5} />
          <div className={styles.mzGroup}>
            <div className={styles.mz2} onClick={onMZText1Click}>
              MZ 번역기
            </div>
            <div className={styles.mz3} onClick={onMZText2Click}>
              MZ 사전
            </div>
            <div className={styles.mz4}>MZ 커뮤니티</div>
            <div className={styles.div8}>도움말</div>
          </div>
        </div>
        <div className={styles.mz5}>MZ 커뮤니티</div>
        <div className={styles.mz6}>MZ 커뮤니티</div>
        <div className={styles.groupContainer}>
          <div className={styles.hotParent}>
            <div className={styles.hot}>HOT</div>
            <div className={styles.groupChild6} />
          </div>
          <b className={styles.b6}>{`김민수 폼 미쳤다이 `}</b>
          <div className={styles.div9}>아니 어제 올린 인스타 게시물 봤...</div>
        </div>
        <div
          className={styles.rectangleParent5}
          onClick={onGroupContainer14Click}
        >
          <div className={styles.groupChild7} />
          <div className={styles.div10}>글 작성하기</div>
        </div>
      </div>
      {isGroupOpen && (
        <PortalDrawer placement="Top" onOutsideClick={closeGroup}>
          <GroupComponent onClose={closeGroup} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Frame9;
