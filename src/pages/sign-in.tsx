import { type NextPage } from "next";
import { Container } from "@mantine/core";

import { SignIn } from "@widgets/sign-in";

const Home: NextPage = () => (
  <Container
    size={320}
    className="align-center flex h-screen	flex-col items-center justify-center pt-20 pb-12"
  >
    <SignIn />
  </Container>
);

export default Home;
