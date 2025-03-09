import styles from "./index.module.scss";
import ComponentBasicButton from "@components/basic/button";

interface IProps {
  labelPositivButton: string;
  labelNegativButton: string;
  actionPostive?: any;
  actionNegative: any;
  isSubmit?: boolean;
  customStyles?: {
    background?: string;
  };
}

export function BasicModalActions({
  labelPositivButton,
  labelNegativButton,
  actionPostive,
  actionNegative,
  isSubmit,
  customStyles,
}: Readonly<IProps>) {
  const background = customStyles?.background ?? "";

  return (
    <div className={styles.containerActions} style={{ background: background }}>
      <div className={styles.internalSpace}>
        <ComponentBasicButton
          title={labelNegativButton}
          action={actionNegative}
        />
        <ComponentBasicButton
          title={labelPositivButton}
          action={actionPostive}
          type={isSubmit ? "submit" : "button"}
        />
      </div>
    </div>
  );
}
