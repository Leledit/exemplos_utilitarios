
import styles from "./index.module.scss";
import ComponentModalHeader from "@components/basic/modal/header";
import ComponentBasicModal from "@components/basic/modal";
import { BasicModalActions } from "../actions";

interface Iprops {
  open: boolean;
  setOpen: (opne: boolean) => void;
  description?: string;
  title: string;
  actionPostive: any;
  iconHeaderModal: "new" | "delete" | "edit" | "settings"  | "public";
  labelPositivButton: string,
}

export default function BasicModalConfirmation({
  open,
  setOpen,
  description,
  title,
  actionPostive,
  iconHeaderModal,
  labelPositivButton
}: Readonly<Iprops>) {


  return (
    <ComponentBasicModal
      open={open}
      body={
        <div className={styles.containerModal}>
          <ComponentModalHeader title={title} icon={iconHeaderModal} setOpen={setOpen} />
          <div className={styles.containerMensagem}>
            <p className={styles.message} dangerouslySetInnerHTML={{__html:description||""}} />
          </div>
          <BasicModalActions
            labelNegativButton="Cancelar"
            labelPositivButton={labelPositivButton}
            actionNegative={()=>{setOpen(false)}}
            actionPostive={actionPostive}
          />
        </div>
      }
    />
  );
}