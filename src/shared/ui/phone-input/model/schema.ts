import { isValidPhoneNumber } from "react-phone-number-input";
import * as yup from "yup";

export const schema = yup
  .string()
  .test("is-valid-phone-number", "Invalid phone number", (value) =>
    isValidPhoneNumber(`${value}`)
  );
