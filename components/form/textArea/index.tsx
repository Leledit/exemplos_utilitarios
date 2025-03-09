import styles from "./index.module.scss";

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  label: string;
  error: boolean;
  validatedForm?: boolean;
  isNotRequired?: boolean;
}

export default function BasicFormTextArea({
  value,
  onChange,
  name,
  label,
  error,
  validatedForm,
  isNotRequired,
}: Readonly<IProps>) {
  return (
    <div className={styles.containerTextArea}>
      <label className={styles.label}>{label}</label>
      <textarea
        required={isNotRequired === true ? false : true}
        name={name}
        value={value}
        className={styles.textArea}
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
