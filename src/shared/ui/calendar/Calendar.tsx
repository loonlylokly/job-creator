"use client";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

import style from "./Calendar.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={style.calendar}
      classNames={{
        months: style.months,
        month: style.month,
        caption: style.caption,
        caption_label: style.caption_label,
        nav: style.nav,
        nav_button: style.nav_button,
        nav_button_previous: style.nav_button_previous,
        nav_button_next: style.nav_button_next,
        table: style.table,
        head_row: style.head_row,
        head_cell: style.head_cell,
        row: style.row,
        cell: `${style.cell} ${
          props.mode === "range" ? style.cell_range : style.cell_norange
        }`,
        day: style.day,
        day_range_start: style.day_range_start,
        day_range_end: "day-range-end",
        day_selected: style.day_selected,
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className={style.icon} />,
        IconRight: ({ ...props }) => (
          <ChevronRightIcon className={style.icon} />
        ),
      }}
      {...props}
    />
  );
};
