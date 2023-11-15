import { memo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = memo(({ onClose }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>회원 탈퇴</div>
        <div className={styles.groupItem} />
        <div className={styles.mzParent}>
          <div className={styles.mz}>
            회원탈퇴 시 개인정보 및 MZ 번역기에서 만들어진 모든 데이터는
            삭제됩니다.
          </div>
          <div className={styles.div1}>
            + 회원 탈퇴 시 가입 정보를 복구할 수 없으며, 영구적으로 삭제됩니다.
          </div>
          <div className={styles.parent}>
            <div className={styles.div2}>
              위의 내용을 모두 확인하였으며, 회원 탈퇴에 동의합니다.
            </div>
            <div className={styles.rectangleWrapper}>
              <div className={styles.groupInner} />
            </div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
          </div>
          <b className={styles.b}>회원 탈퇴</b>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent;
