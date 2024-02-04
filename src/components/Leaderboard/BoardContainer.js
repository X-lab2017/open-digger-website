import orbit from '@site/static/img/leaderboard/orbit.gif';
import styles from './styles.module.css';

export const BoardContainer = ({ children, title }) => {
  return (
    <div className={`${styles.boardContainer}`}>
      <div className={styles.boardTitle}>
        <img src={orbit} alt="" className={styles.boardTitleIcon} />
        <span className={styles.boardTitleText}>{title?.value ?? ''}</span>
      </div>
      {children}
    </div>
  );
}
