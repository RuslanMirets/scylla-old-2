import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IProps {
  name: string;
  label: string;
  type: string;
  disabled?: boolean;
  multiline?: boolean;
  maxRows?: any;
}

export const FormField: React.FC<IProps> = ({
  name,
  label,
  type,
  disabled,
  multiline,
  maxRows,
}) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      label={label}
      type={type}
      variant="outlined"
      size="small"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      disabled={disabled}
      multiline={multiline}
      maxRows={maxRows}
    />
  );
};
