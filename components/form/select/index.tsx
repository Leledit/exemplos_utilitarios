import { ReactNode } from "react";
import styles from "./index.module.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export interface IFormSelectOptions{
  value: string,
  label: string,
}

interface IProps {
  value: string;
  onChange: (e: SelectChangeEvent<string>, child: ReactNode) => void;
  options: IFormSelectOptions[];
  label: string;
  name: string;
  disabled?: boolean;
  isValidating: boolean;
  error: boolean;
}

export default function BasicFormSelect({
  value,
  onChange,
  options,
  label,
  name,
  disabled = false,
  isValidating,
  error,
}: Readonly<IProps>) {

  return (
      <FormControl className={styles.containerSelect}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          input={<OutlinedInput label={name} />}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => {
            return (
              <MenuItem
                value={option.value}
                key={`${index}-${option.label}`}
                selected={option.value === value}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
        {isValidating && error && (
          <p className={styles.msgErro}>Este campo é obrigatorio</p>
        )}
      </FormControl>
  );
}
