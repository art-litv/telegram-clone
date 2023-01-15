import { type NextPage } from "next";
import { Title, Text, Container } from "@mantine/core";

import SignInForm from "@widgets/forms/sign-in/ui/form";

import TelegramLogo from "public/icon.svg";

const Home: NextPage = () => (
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
    <SignInForm />
  </Container>
);

export default Home;
