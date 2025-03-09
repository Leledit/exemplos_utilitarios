import FormInput from "@components/basic/form/input";
import styles from "./index.module.scss";
import { FormEvent, useEffect, useState } from "react";
import ComponentModalHeader from "@components/basic/modal/header";
import { BasicModalActions } from "@components/basic/modal/actions";
import ComponentBasicModal from "@components/basic/modal";

interface Iprops {
  readonly open: boolean;
  setOpen: (open: boolean) => void;
  readonly title: string;
  readonly iconHeaderModal: "new" | "delete" | "edit" | "settings";
  readonly labelInput: string;
  readonly actionPostive: (value: string) => void;
  readonly initialValue: string;
}

export default function BasicModalInput({
  open,
  setOpen,
  title,
  iconHeaderModal,
  labelInput,
  actionPostive,
  initialValue,
}: Iprops) {
  const [errorForm, setErrorForm] = useState<boolean>(false);
  const [validatedForm, setValidatedForm] = useState<boolean>(false);
  const [input, setInput] = useState<string>(initialValue);

  useEffect(() => {
    if (open === false) {
      setErrorForm(false);
      setValidatedForm(false);
      setInput("");
    }
  }, [open]);

  return (
    <ComponentBasicModal
      open={open}
      version="default"
      body={
        <div className={styles.containerModal}>
          <ComponentModalHeader
            title={title}
            icon={iconHeaderModal}
            setOpen={setOpen}
          />
          <form className={styles.containerForm} onSubmit={(e) => {validatingForm(e)}}>
            <FormInput
              label={labelInput}
              name="name"
              error={errorForm}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              validatedForm={validatedForm}
            />
            <BasicModalActions
              labelNegativButton="Cancelar"
              labelPositivButton="Salvar"
              actionNegative={() => {
                setOpen(false);
              }}
              isSubmit={true}
            />
          </form>
        </div>
      }
    />
  );
  function validatingForm(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidatedForm(true);
    if (input.length > 0) {
      actionPostive(input);
      setInput("");
      setErrorForm(false);
    } else {
      setErrorForm(true);
    }
  }
}
