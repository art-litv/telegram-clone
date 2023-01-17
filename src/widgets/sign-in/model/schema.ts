import * as yup from "yup";

import { phoneInputSchema } from "@shared/ui/phone-input";
import { countrySelectSchema } from "@shared/ui/country-select";

export const fields = {
  country: "country",
  phone: "phone",
  keepSigned: "keepSigned",
};

export const schema = yup.object().shape({
  [fields.country]: countrySelectSchema.required(),
  [fields.phone]: phoneInputSchema.required(),
  [fields.keepSigned]: yup.boolean().default(false),
});
