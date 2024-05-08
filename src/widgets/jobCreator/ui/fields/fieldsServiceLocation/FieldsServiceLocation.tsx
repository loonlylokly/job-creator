import Select from "react-select";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { FieldSet } from "@/features/fieldset/FieldSet";
import { InputText } from "@/shared/ui/input/inputText/InputText";
import { TJob } from "@/shared/types/job";

import style from "../Fields.module.css";
import { Message as FormMessage } from "@radix-ui/react-form";

type TProps = {
  reg: UseFormRegister<TJob>;
  control: Control<TJob>;
  errors: FieldErrors<TJob>;
};

export const FieldsServiceLocation = ({ reg, control, errors }: TProps) => {
  return (
    <FieldSet title="Service Location">
      <div className={style.wrapper}>
        <InputText
          type="text"
          placeholder="Address"
          message={errors["Address"]?.message}
          {...reg("Address")}
        />
        <InputText
          type="text"
          placeholder="City"
          message={errors["City"]?.message}
          {...reg("City")}
        />
        <InputText
          type="text"
          placeholder="State"
          message={errors["State"]?.message}
          {...reg("State")}
        />
        <div className={style.two_fields}>
          <InputText
            type="number"
            placeholder="zipcode"
            message={errors["Zipcode"]?.message}
            {...reg("Zipcode")}
          />
          <Controller
            name="Area"
            control={control}
            render={({ field }) => (
              <div className={style.field}>
                <Select
                  instanceId={"area"}
                  placeholder="Area"
                  {...field}
                  options={[
                    { value: "test1", label: "test1" },
                    { value: "test2", label: "test2" },
                    { value: "test3", label: "test3" },
                  ]}
                />
                {errors["Area"]?.message && <p>{errors["Area"]?.message}</p>}
              </div>
            )}
          />
        </div>
      </div>
    </FieldSet>
  );
};
