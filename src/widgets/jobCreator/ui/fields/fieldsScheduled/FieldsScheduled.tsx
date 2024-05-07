import Select from "react-select";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { FieldSet } from "@/features/fieldset/FieldSet";
import { DatePicker } from "@/shared/ui/datePicker/DatePicker";
import { InputText } from "@/shared/ui/input/inputText/InputText";
import { TJob } from "@/shared/types/job";

import style from "../Fields.module.css";

type TProps = {
  reg: UseFormRegister<TJob>;
  control: Control<TJob>;
  errors: FieldErrors<TJob>;
};

export const FieldsScheduled = ({ reg, control, errors }: TProps) => {
  return (
    <FieldSet title="Scheduled">
      <div className={style.wrapper}>
        <DatePicker placeholder="Start date" />
        <div className={style.two_fields}>
          <InputText
            type="text"
            placeholder="Start time"
            message={errors.startTime?.message}
            {...reg("startTime")}
          />
          <InputText
            type="text"
            placeholder="End time"
            message={errors.endTime?.message}
            {...reg("endTime")}
          />
        </div>
        <Controller
          name="testSelect"
          control={control}
          render={({ field }) => (
            <Select
              className={style.field}
              instanceId="Test select"
              placeholder="Test select"
              {...field}
              options={[
                { value: "test1", label: "test1" },
                { value: "test2", label: "test2" },
                { value: "test3", label: "test3" },
              ]}
            />
          )}
        />
      </div>
    </FieldSet>
  );
};
