import type { NextPage, GetServerSideProps } from "next";
import {
  TextInput,
  Checkbox,
  Title,
  Text,
  Container,
  Button,
  Autocomplete,
} from "@mantine/core";

import ssrAuth from "@shared/lib/auth";

import TelegramLogo from "public/icon.svg";

const Home: NextPage = () => {
  return (
    <Container
      size={320}
      className="align-center flex h-screen	flex-col items-center justify-center pb-12"
    >
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
      <form className="mt-6 flex w-full flex-col gap-2">
        <Autocomplete
          label="Country"
          placeholder="Your country"
          required
          data={["Ukraine"]}
        />
        <TextInput label="Phone" placeholder="Your phone" required />
        <Checkbox label="Keep me signed in" className="my-3" />
        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = ssrAuth();

export default Home;
