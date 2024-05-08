import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FieldSet } from "@/features/fieldset/FieldSet";
import { InputText } from "@/shared/ui/input/inputText/InputText";
import { TJob } from "@/shared/types/job";

import style from "../Fields.module.css";

type TProps = {
  reg: UseFormRegister<TJob>;
  errors: FieldErrors<TJob>;
};

export const FieldsClientDetails = ({ reg, errors }: TProps) => {
  return (
    <FieldSet title="Client details">
      <div className={style.wrapper}>
        <div className={style.two_fields}>
          <InputText
            type="text"
            placeholder="First name"
            message={errors["First name"]?.message}
            {...reg("First name")}
          />
          <InputText
            type="text"
            placeholder="Last name"
            message={errors["Last name"]?.message}
            {...reg("Last name")}
          />
        </div>
        <InputText
          type="phone"
          placeholder="Phone"
          message={errors["Phone"]?.message}
          {...reg("Phone")}
        />
        <InputText
          type="email"
          placeholder="Email (optional)"
          message={errors["Email"]?.message}
          {...reg("Email")}
        />
      </div>
    </FieldSet>
  );
};
