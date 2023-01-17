import { Title, Text, Box, useMantineTheme, ActionIcon } from "@mantine/core";
import { IconDeviceMobileMessage, IconPencil } from "@tabler/icons";
import { useSwiper } from "swiper/react";

import { PinInput } from "@shared/ui/pin-input";

export const ConfirmCodeView = () => {
  const theme = useMantineTheme();
  const swiper = useSwiper();

  return (
    <Box className="flex flex-col items-center">
      <IconDeviceMobileMessage color={theme.colors.blue[5]} size={120} />
      <Title size="h2" className="mt-8 flex items-center gap-1">
        +380 68 362 10 31
        <ActionIcon onClick={() => swiper?.slidePrev()}>
          <IconPencil />
        </ActionIcon>
      </Title>
      <Text
        color="dimmed"
        className="mt-4 w-3/4 items-center text-center text-sm"
      >
        We have sent you a message with a secret code.
      </Text>
      <PinInput length={5} className="mt-5" />
    </Box>
  );
};
