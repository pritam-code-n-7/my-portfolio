import { ChangeEvent } from "react";

export type InputTypes = {
  label?: string;
  htmlFor?: string;
  id: string;
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};
