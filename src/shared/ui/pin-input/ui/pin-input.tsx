import React, { useRef } from "react";
import { Group, clsx } from "@mantine/core";

import { NumberBoxInput } from "./number-box-input";

type PinInputProps = {
  length: number;
} & React.ComponentProps<typeof Group>;

const PinInput: React.FC<PinInputProps> = ({ length, className, ...props }) => {
  const codePartRefs = useRef<HTMLInputElement[]>([]);

  return (
    <Group className={clsx("gap-2", className)} {...props}>
      {Array.from({ length }).map((_, index) => (
        <NumberBoxInput
          key={`pin-${length}-${index}`}
          onChange={() => codePartRefs.current[index + 1]?.focus()}
          ref={(el: HTMLInputElement) => {
            codePartRefs.current[index] = el as HTMLInputElement;
          }}
        />
      ))}
    </Group>
  );
};

export default PinInput;
