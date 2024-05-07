import { FieldSet } from "@/features/fieldset/FieldSet";
import { InputText } from "@/shared/ui/input/inputText/InputText";

import style from "../Fields.module.css";
import Select from "react-select";

export const FieldsServiceLocation = () => {
  return (
    <FieldSet title="Service Location">
      <div className={style.wrapper}>
        <InputText type="text" placeholder="Address" required />
        <InputText type="text" placeholder="City" />
        <InputText type="text" placeholder="State" />
        <div className={style.two_fields}>
          <InputText type="number" placeholder="zipcode" />
          <Select
            className={style.field}
            options={[
              { value: "test1", label: "test1" },
              { value: "test2", label: "test2" },
              { value: "test3", label: "test3" },
            ]}
          />
        </div>
      </div>
    </FieldSet>
  );
};
