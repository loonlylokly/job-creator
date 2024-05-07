"use client";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      components={{
        IconLeft: ({ ...props }) => <div>{"<"}</div>,
        IconRight: ({ ...props }) => <div>{">"}</div>,
      }}
      {...props}
    />
  );
};
