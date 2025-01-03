import styles from './styles.module.css';

interface PureImageProps {
  url: string;
  rounded?: boolean;
}

export const PureImage = ({ url, rounded }: PureImageProps) => {
  return (
    <div className={styles.nameContainer}>
      {(url && url != '') ?
        <img src={url} alt="" className={`${styles.icon} ${rounded ? styles.iconRounded : ''}`} /> : null}
    </div>
  )
}
