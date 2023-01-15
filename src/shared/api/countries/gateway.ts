import type { Country } from "./model/types";

export const getCountries = async (): Promise<Country[]> => {
  const { default: countries } = await import("@shared/config/countries.json");

  return countries.map(({ dial_code, ...country }) => ({
    ...country,
    dialCode: dial_code,
  }));
};
