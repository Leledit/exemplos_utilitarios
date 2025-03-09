import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export const handleChancheField = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>|SelectChangeEvent<string>,
  setFormsFilds: any,
  formsFilds: any
) => {
  const targetName = e.target.name;
  const targetValue = e.target.value;

  setFormsFilds({
    ...formsFilds,
    [targetName]: {
      value: targetValue,
      error: targetValue.length === 0,
    },
  });
};