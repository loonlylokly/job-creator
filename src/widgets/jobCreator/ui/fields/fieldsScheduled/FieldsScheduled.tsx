import { FieldSet } from "@/features/fieldset/FieldSet";
import { DatePicker } from "@/shared/ui/datePicker/DatePicker";
import { InputText } from "@/shared/ui/input/inputText/InputText";
import Select from "react-select";

import style from "../Fields.module.css";

export const FieldsScheduled = () => {
  return (
    <FieldSet title="Scheduled">
      <div className={style.wrapper}>
        <DatePicker placeholder="Start date" />
        <div className={style.two_fields}>
          <InputText type="text" placeholder="Start time" />
          <InputText type="text" placeholder="End time" />
        </div>
        <Select
          className={style.field}
          options={[
            { value: "test1", label: "test1" },
            { value: "test2", label: "test2" },
            { value: "test3", label: "test3" },
          ]}
        />
      </div>
    </FieldSet>
  );
};
