import styles from './styles.module.css';

export const BoardContainer = ({ children, title }) => {
  return (
    <div className={`${styles.boardContainer}`}>
      <div className={styles.boardTitle}>
        <img src='/img/leaderboard/orbit.gif' alt="" className={styles.boardTitleIcon} />
        <span className={styles.boardTitleText}>{title}</span>
      </div>
      {children}
    </div>
  );
}
