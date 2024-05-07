import { TInput, TInputProps, TTextAreaProps } from "@/shared/types/common";
import { Field, Control, Message, Label } from "@radix-ui/react-form";

import style from "./InputText.module.css";

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
      <Message className={style.message} match="typeMismatch">
        {message}
      </Message>
    </Field>
  );
};

export const InputText = ({
  label = "",
  message = "",
  styleField = "",
  children = <input type="text" />,
  ...rest
}: TInput) => {
  return (
    <Input label={label} message={message} styleField={styleField}>
      <input
        type="text"
        {...rest}
        className={`${style.input} ${message && style.error} ${rest.className}`}
      />
    </Input>
  );
};

export const TextArea = ({
  label = "",
  message = "",
  children = <textarea />,
  ...rest
}: TTextAreaProps) => {
  return (
    <Input label={label} message={message}>
      <textarea
        {...rest}
        className={`${style.input} ${message && style.error} ${rest.className}`}
      />
    </Input>
  );
};
