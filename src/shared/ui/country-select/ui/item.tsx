import React from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { Group, Text, clsx } from "@mantine/core";

import type { CountryItem as CountryItemType } from "../model";

/* 
  ! onMouseEnter should be undefined to prevent Mantine from adding a hover effect,
  ! which causes whole list to re-render on item hover 
*/
export const CountryItem = React.forwardRef<
  HTMLDivElement,
  CountryItemType & React.HTMLAttributes<HTMLDivElement>
>(({ name, code, dialCode, ...itemProps }, ref) => {
  const Flag = (Flags as Record<string, Flags.FlagComponent>)[code];

  return (
    <div
      {...itemProps}
      ref={ref}
      className={clsx("hover:bg-gray-100", itemProps.className)}
      onMouseEnter={undefined}
    >
      <Group className="justify-between whitespace-nowrap">
        <Group className="gap-2">
          {Flag ? <Flag width={18} /> : code}
          <Text className="w-40	truncate font-bold">{name}</Text>
        </Group>
        <Text color="dimmed" className="font-bold">
          {dialCode}
        </Text>
      </Group>
    </div>
  );
});

CountryItem.displayName = "CountryItem";
