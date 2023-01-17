import React from "react";
import { NumberInput, clsx } from "@mantine/core";

type NumberBoxInputProps = React.ComponentProps<typeof NumberInput>;

export const NumberBoxInput: React.FC<NumberBoxInputProps> = React.forwardRef(
  ({ className, classNames, ...props }, ref) => {
    const { input: inputClass, ...otherClassNames } = classNames || {};

    return (
      <NumberInput
        max={9}
        min={0}
        className={clsx("h-12 w-12", className)}
        hideControls
        classNames={{
          input: clsx("h-12 w-12 text-center text-xl", inputClass),
          ...otherClassNames,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

NumberBoxInput.displayName = "NumberBoxInput";
