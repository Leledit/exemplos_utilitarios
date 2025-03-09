import styles from "./index.module.scss";
import { Switch } from "@mui/material";
import { ChangeEvent } from "react";

interface IProps {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  label: string;
  isValidating: boolean;
  error: boolean;
  className?:string,
}

export default function BasicFormSwitch({
  isChecked,
  onChange,
  label,
  isValidating,
  error,
  className
}: Readonly<IProps>) {
  return (
    <div className={`${styles.mainContainer} ${className}`}>
      <div className={styles.containerSwitch}>
        <p className={styles.label}>{label}</p>
        <Switch
          checked={isChecked}
          onChange={onChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      {isValidating && error && (
          <p className={styles.msgErro}>Este campo é obrigatorio</p>
        )}
    </div>
  );
}
