import styles from "./index.module.scss";

interface IProps {
  readonly isActive: boolean;
  readonly customSettings?: {
    readonly background?: string;
    readonly height?: string;
    readonly width?: string;
  };
}

export default function BasicLoadingFullPage({
  isActive,
  customSettings,
}: IProps) {
  if (!isActive) {
    return <></>;
  }

  const background = customSettings?.background
    ? customSettings.background
    : "#dfdfdf";

  const height = customSettings?.height ? customSettings?.height : "150px";
  const width = customSettings?.width ? customSettings?.width : "150px";

  return (
    <div className={styles.containerLoading} style={{ background: background }}>
      <div className={styles.loader}>
        <div
          className={styles.circle}
          style={{ height: height, width: width }}
        />
      </div>
    </div>
  );
}
