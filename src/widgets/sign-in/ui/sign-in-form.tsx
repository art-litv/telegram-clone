import React from "react";
import { type E164Number, AsYouType } from "libphonenumber-js";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Button } from "@mantine/core";
import { useForceUpdate } from "@mantine/hooks";
import { useForm } from "react-hook-form";

import { CountrySelect } from "@shared/ui/country-select";
import { PhoneInput } from "@shared/ui/phone-input";

import { fields, schema } from "../model/schema";

type SignInFormProps = {
  onSubmit: () => void;
};

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const {
    setFocus,
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const forceUpdate = useForceUpdate();

  const [country, phone] = getValues([fields.country, fields.phone]);

  return (
    <form
      className="mt-6 flex w-full flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        // TODO
        onSubmit();
      })}
    >
      <CountrySelect
        {...register(fields.country)}
        value={country}
        onChange={(country) => {
          setValue(fields.country, country.code);
          setValue(fields.phone, country.dialCode);
          forceUpdate();
        }}
        error={errors.country?.message as string}
        required
      />
      <PhoneInput
        {...register(fields.phone)}
        value={phone}
        onChange={(value) => {
          const asYouType = new AsYouType();
          asYouType.input(value as E164Number);
          const phoneCountry = asYouType.getCountry() ?? "";

          setValue(fields.phone, value);
          //focus phoneRef
          setFocus(fields.country);

          if (country !== phoneCountry) {
            setValue(fields.country, phoneCountry);
            forceUpdate();
          }
        }}
        error={errors.phone?.message as string}
        required
      />
      <Checkbox
        {...register(fields.keepSigned)}
        label="Keep me signed in"
        className="my-3"
      />
      <Button type="submit" className="w-full">
        Next
      </Button>
    </form>
  );
};
