import React, { useEffect, useState } from "react";
import { type SelectProps, Select } from "@mantine/core";

import { countriesGateway } from "@shared/api/countries";

import type { CountrySelectItem } from "../model/types";
import { CountryItem } from "./item";

type CountrySelectProps = {
  onChange: (country: CountrySelectItem) => void;
} & Omit<SelectProps, "data" | "onChange">;

// TODO: Add type for props
export const CountrySelect: React.FC<CountrySelectProps> = ({
  onChange,
  ...props
}) => {
  const [data, setData] = useState<CountrySelectItem[]>([]);

  useEffect(() => {
    (async () => {
      const countries = await countriesGateway.getCountries();

      setData(
        countries.map((country) => ({
          label: country.name,
          value: country.code,
          ...country,
        }))
      );
    })();
  }, []);

  return (
    <Select
      label="Country"
      itemComponent={CountryItem}
      placeholder="Your country"
      onChange={(countryCode) =>
        onChange?.(
          data.find(({ code }) => code === countryCode) as CountrySelectItem
        )
      }
      data={data}
      searchable
      withinPortal
      {...props}
    />
  );
};
