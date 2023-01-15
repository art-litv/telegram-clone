import type { SelectItem } from "@mantine/core";

import type { countriesTypes } from "@shared/api/countries";

export type CountrySelectItem = SelectItem & countriesTypes.Country;
