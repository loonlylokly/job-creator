import { FieldSet } from "@/features/fieldset/FieldSet";
import { InputText } from "@/shared/ui/input/inputText/InputText";

import style from "../Fields.module.css";

export const FieldsClientDetails = () => {
  return (
    <FieldSet title="Client details">
      <div className={style.wrapper}>
        <div className={style.two_fields}>
          <InputText
            type="text"
            name="first_name"
            placeholder="First name"
            required
          />
          <InputText
            type="text"
            name="last_name"
            placeholder="Last name"
            required
          />
        </div>
        <InputText type="phone" name="phone" placeholder="Phone" required />
        <InputText type="email" name="email" placeholder="Email(optional)" />
      </div>
    </FieldSet>
  );
};
