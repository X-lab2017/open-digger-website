import styles from './styles.module.css';

export const NameWithIcon = ({ icon, name, rounded }) => {
  return (
    <div className={styles.nameContainer}>
      <img src={icon} alt="" className={`${styles.icon} ${rounded ? styles.iconRounded : ''}`} />
      <span className={styles.ellipsis}>{name}</span>
    </div>
  )
}
