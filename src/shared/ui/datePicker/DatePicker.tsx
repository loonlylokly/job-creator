"use client";
import * as Popover from "@radix-ui/react-popover";
import { Calendar } from "../calendar/Calendar";
import {
  Field as FormField,
  Label as FormLabel,
  Message as FormMessage,
} from "@radix-ui/react-form";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";

import style from "./DatePicker.module.css";

type TProps = {
  label?: string;
  name?: string;
  message?: string;
  dateDefault?: Date;
  placeholder?: string;
};

export const DatePicker = ({
  label = "",
  name = "datePicker",
  message = "",
  placeholder = "",
  dateDefault,
}: TProps) => {
  const [date, setDate] = useState<Date | undefined>(dateDefault);

  return (
    <FormField name={name}>
      {label && <FormLabel>Date of birth</FormLabel>}
      <Popover.Root>
        <Popover.Trigger
          className={`${style.trigger} ${date && style.selected}`}
        >
          {date ? format(date, "PPP") : placeholder}
          <CalendarIcon />
        </Popover.Trigger>
        <Popover.Content className={style.content}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => {
              let yestarday = new Date();
              yestarday.setDate(yestarday.getDate() - 1);
              return date < yestarday || date > new Date("2100-01-01");
            }}
            initialFocus
          />
        </Popover.Content>
      </Popover.Root>
      <FormMessage match="typeMismatch">{message}</FormMessage>
    </FormField>
  );
};
