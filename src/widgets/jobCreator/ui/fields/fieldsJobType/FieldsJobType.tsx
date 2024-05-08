import Select from "react-select";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { FieldSet } from "@/features/fieldset/FieldSet";
import { TextArea } from "@/shared/ui/input/inputText/InputText";
import { TJob } from "@/shared/types/job";

import style from "../Fields.module.css";

type TProps = {
  reg: UseFormRegister<TJob>;
  control: Control<TJob>;
  errors: FieldErrors<TJob>;
};

export const FieldsJobType = ({ reg, control, errors }: TProps) => {
  return (
    <FieldSet title="Job details">
      <div className={style.wrapper}>
        <div className={style.two_fields}>
          <Controller
            name="Job type"
            control={control}
            render={({ field }) => (
              <Select
                className={style.field}
                instanceId="job type"
                placeholder="Job Type"
                {...field}
                options={[
                  { value: "test1", label: "test1" },
                  { value: "test2", label: "test2" },
                  { value: "test3", label: "test3" },
                ]}
              />
            )}
          />
          <Controller
            name="Job source"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className={style.field}
                instanceId="job source"
                placeholder="Job Source"
                options={[
                  { value: "GP Philine", label: "GP Philine" },
                  { value: "test2", label: "test2" },
                  { value: "test3", label: "test3" },
                ]}
              />
            )}
          />
        </div>
        <TextArea
          message={errors["Job description"]?.message}
          placeholder="Job Description (optional)"
          rows={4}
          style={{ resize: "none" }}
          {...reg("Job description")}
        />
      </div>
    </FieldSet>
  );
};
