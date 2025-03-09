import { Slider } from "@mui/material";
import styles from "./index.module.scss";

interface IProps {
  value: number;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  label: string;
  isValidating: boolean;
  error: boolean;
}

export default function BasicFormSlider({
  value,
  onChange,
  label,
  isValidating,
  error,
}: Readonly<IProps>) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerSlider}>
        <p className={styles.label}>{label}</p>
        <Slider
          defaultValue={value}
          onChange={onChange}
          className={styles.slider}
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={100}
        />
        <p className={styles.value}>{value/10}</p>
      </div>
      {isValidating && error && (
        <p className={styles.msgErro}>Este campo é obrigatorio</p>
      )}
    </div>
  );
}
