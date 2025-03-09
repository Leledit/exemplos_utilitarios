import styles from "./index.module.scss";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsIcon from "@mui/icons-material/Settings";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";

export type BasicModalHeaderIcon =
  | "new"
  | "delete"
  | "edit"
  | "settings"
  | "view"
  | "public"
  | "search";

interface Iprops {
  title: string;
  icon: BasicModalHeaderIcon;
  setOpen: (open: boolean) => void;
}

export default function BasicModalHeader({
  title,
  icon,
  setOpen,
}: Readonly<Iprops>) {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.internalSpace}>
        <div className={styles.titleAndIcon}>
          {returnCorrespondingIcon()}
          <h3 className={styles.title}>{title}</h3>
        </div>
        <CancelIcon
          className={styles.headerIcon}
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );

  function returnCorrespondingIcon() {
    switch (icon) {
      case "new": {
        return <ControlPointDuplicateIcon className={styles.icon} />;
      }
      case "delete": {
        return <DeleteIcon className={styles.icon} />;
      }
      case "edit": {
        return <BorderColorIcon className={styles.icon} />;
      }
      case "settings": {
        return <SettingsIcon className={styles.icon} />;
      }
      case "view": {
        return <AspectRatioIcon className={styles.icon} />;
      }
      case "public": {
        return <PublicIcon className={styles.icon} />;
      }
      case "search": {
        return <SearchIcon className={styles.icon} />;
      }
    }
  }
}
