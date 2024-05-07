import { FieldSet } from "@/features/fieldset/FieldSet";
import { TextArea } from "@/shared/ui/input/inputText/InputText";
import Select from "react-select";

import style from "../Fields.module.css";

export const FieldsJobType = () => {
  return (
    <FieldSet title="Job Type">
      <div className={style.wrapper}>
        <div className={style.two_fields}>
          <Select
            className={style.field}
            options={[
              { value: "test1", label: "test1" },
              { value: "test2", label: "test2" },
              { value: "test3", label: "test3" },
            ]}
          />
          <Select
            className={style.field}
            options={[
              { value: "test1", label: "test1" },
              { value: "test2", label: "test2" },
              { value: "test3", label: "test3" },
            ]}
          />
        </div>
        <TextArea />
      </div>
    </FieldSet>
  );
};
