import { type TextInputProps, TextInput } from "@mantine/core";
import PhoneNumberInput, { type Value } from "react-phone-number-input/input";

type PhoneInputProps = {
  value?: Value;
  onChange: (value?: Value) => void;
} & Omit<TextInputProps, "value" | "onChange">;

export const PhoneInput: React.FC<PhoneInputProps> = ({
  onChange,
  ...props
}) => (
  <PhoneNumberInput
    onChange={(value) => onChange(value ?? "")}
    inputComponent={TextInput}
    placeholder="Your phone"
    label="Phone"
    {...props}
  />
);
