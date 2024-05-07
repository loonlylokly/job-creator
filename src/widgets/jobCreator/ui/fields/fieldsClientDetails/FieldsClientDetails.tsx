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
            message={errors.firstName?.message}
            {...reg("firstName")}
          />
          <InputText
            type="text"
            placeholder="Last name"
            message={errors.lastName?.message}
            {...reg("lastName")}
          />
        </div>
        <InputText
          type="phone"
          placeholder="Phone"
          message={errors.phone?.message}
          {...reg("phone")}
        />
        <InputText
          type="email"
          placeholder="Email (optional)"
          message={errors.email?.message}
          {...reg("email")}
        />
      </div>
    </FieldSet>
  );
};
