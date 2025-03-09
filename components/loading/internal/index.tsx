import { CircularProgress } from "@mui/material";
import styles from "./index.module.scss";

interface Iprops {
  loading: boolean;
}

export default function BasicLoadingInternal({ loading }: Readonly<Iprops>) {
  if (!loading) {
    return <></>;
  }

  return (
    <div className={styles.containerLoading}>
      <CircularProgress className={styles.loading} />
    </div>
  );
}
