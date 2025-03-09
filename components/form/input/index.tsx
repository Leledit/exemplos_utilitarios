import styles from "./index.module.scss";
import { TextField } from "@mui/material";

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  error: boolean;
  className?:string;
  validatedForm?: boolean;
}

export default function BasicFormInput({
  value,
  onChange,
  name,
  label,
  error,
  className,
  validatedForm
}: Readonly<IProps>) {
  return (
    <div className={`${styles.containerInput} ${className}`}>
      <TextField
        required
        name={name}
        label={label}
        value={value}
        className={styles.input}
        onChange={onChange}
      />
      {getMessage(validatedForm, error)}
    </div>
  );
  function getMessage(
    validatedForm: boolean | undefined,
    error: boolean
  ): JSX.Element | null {
    if (validatedForm && error) {
      return <p className={styles.msgErroInput}>Este campo é obrigatório</p>;
    }
    return null;
  }
}
