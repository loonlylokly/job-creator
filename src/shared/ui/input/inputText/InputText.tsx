import { TInput, TInputProps, TTextAreaProps } from "@/shared/types/common";
import { Field, Control, Message, Label } from "@radix-ui/react-form";

import style from "./InputText.module.css";
import { forwardRef } from "react";

export const Input = ({
  label = "",
  message = "",
  styleField = "",
  children = <input type="text" />,
  ...rest
}: TInput) => {
  return (
    <Field className={`${style.field} ${styleField}`} name={rest.name || ""}>
      {label && <Label className={style.label}>{label}</Label>}
      <Control asChild>{children}</Control>
      {message && <Message className={style.message}>{message}</Message>}
    </Field>
  );
};

export const InputText = forwardRef<HTMLInputElement, TInput>(
  (
    {
      label = "",
      message = "",
      styleField = "",
      children = <input type="text" />,
      ...rest
    },
    ref
  ) => {
    return (
      <Input label={label} message={message} styleField={styleField}>
        <input
          type="text"
          {...rest}
          className={`${style.input} ${message && style.error} ${
            rest.className
          }`}
          ref={ref}
        />
      </Input>
    );
  }
);

InputText.displayName = "InputText";

export const TextArea = forwardRef<HTMLTextAreaElement, TTextAreaProps>(
  ({ label = "", message = "", children = <textarea />, ...rest }, ref) => {
    return (
      <Input label={label} message={message}>
        <textarea
          {...rest}
          className={`${style.input} ${message && style.error} ${
            rest.className
          }`}
          ref={ref}
        />
      </Input>
    );
  }
);

TextArea.displayName = "TextArea";
