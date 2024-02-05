import styles from './styles.module.css';

const formatNumber = num => {
  return Math.round(num);
}

export const NumberWithDelta = ({ number, delta }) => {
  if (delta === '-') {
    return (
      <div className={styles.numberContainer}>
        <span className={styles.number}>{formatNumber(number)}</span>
        <img className={styles.tag} src='/img/leaderboard/new.svg' alt='new' />
      </div>
    );
  }
  return (
    <div className={styles.numberContainer}>
      <span>{formatNumber(number)}</span>
      <img className={styles.tag} src={delta > 0 ? '/img/leaderboard/increase.svg' : '/img/leaderboard/decrease.svg'} alt='increase/decrease' />
      <span>{formatNumber(Math.abs(delta))}</span>
    </div>
  );
}
