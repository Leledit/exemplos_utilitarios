import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

export type TypeAlertSeverity = "error" | "success";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  message: string;
  severity: TypeAlertSeverity;
}

export default function BasicSnackbar({
  open,
  setOpen,
  message,
  severity,
}: Readonly<IProps>) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
