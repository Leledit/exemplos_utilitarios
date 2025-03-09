import { DialogContent, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { ReactElement } from "react";

type version = "default" | "large" | "extraLarge";

interface IProps {
  open: boolean;
  body: ReactElement;
  version?: version;
}

export default function BasicModal({
  open,
  body,
  version = "default",
}: Readonly<IProps>) {

  const theme = useTheme();

  let paperMaxWidth = "500px";
  let paperMinWidth = "";

  if (version === "large") {
    paperMaxWidth = "700px";
    paperMinWidth = "550px";
  }

  if(version === "extraLarge"){
    paperMaxWidth = "900px";
    paperMinWidth = "550px";
  }

  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: paperMaxWidth,
          minWidth: paperMinWidth,
          width: "100%",
          background: theme.customPalette.secondary.main,
          borderRadius: "5px",
        },
        "& .MuiDialogContent-root": {
          padding: "0px",
        },
        "& .MuiDialogActions-root": {
          marginBottom: "10px",
          width: "90%",
          marginLeft: "5%",
        },
      }}
    >
      <DialogContent>{body}</DialogContent>
    </Dialog>
  );
}
