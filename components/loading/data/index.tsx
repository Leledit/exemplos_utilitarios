import styles from "./index.module.scss";

interface IProps {
  readonly loading: boolean;
  readonly customSettings?: {
    background?: string;
  };
  readonly title: string;
}

export default function BasicLoadingData({
  loading,
  title,
  customSettings,
}: IProps) {
  const background = customSettings?.background
    ? customSettings.background
    : "#464646b3";

  if (!loading) {
    return <></>;
  }

  return (
    <div className={styles.containerLoading} style={{ background: background }}>
      <div className={styles.loader}>
        <div className={styles.containerInfos}>
          <h2 className={styles.text}>{title}</h2>
          <div className={styles.loadingDots}>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
            <div className={styles.dot}/>
          </div>
        </div>
      </div>
    </div>
  );
}
