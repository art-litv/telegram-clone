import React from "react";
import { Title, Text, Box } from "@mantine/core";
import { useSwiper } from "swiper/react";

import { SignInForm } from "./sign-in-form";

import TelegramLogo from "public/icon.svg";

export const SignInView = () => {
  const swiper = useSwiper();

  return (
    <Box className="flex w-fit flex-col items-center">
      <TelegramLogo width={120} />
      <Title order={4} className="mt-8 items-center text-3xl font-semibold">
        Sign in to Telegram
      </Title>
      <Text
        color="dimmed"
        className="mt-4 w-3/4 items-center text-center text-sm"
      >
        Please confirm your country and enter your phone number.
      </Text>
      <SignInForm onSubmit={() => swiper?.slideNext()} />
    </Box>
  );
};
