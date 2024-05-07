"use client";
import { Form } from "@radix-ui/react-form";
import { Button } from "@/shared/ui/button/Button";
import { FieldsClientDetails } from "./ui/fields/fieldsClientDetails/FieldsClientDetails";
import { FieldsJobType } from "./ui/fields/fieldsJobType/FieldsJobType";
import { FieldsScheduled } from "./ui/fields/fieldsScheduled/FieldsScheduled";
import { FieldsServiceLocation } from "./ui/fields/fieldsServiceLocation/FieldsServiceLocation";
import { zodResolver } from "@hookform/resolvers/zod";

import style from "./JobCreator.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { TJob } from "@/shared/types/job";
import { SJob } from "@/shared/types/schemas/job";

export const JobCreator = () => {
  console.log("Job Creator");
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<TJob>({
    mode: "onSubmit",
    resolver: zodResolver(SJob),
  });

  const onSubmit: SubmitHandler<TJob> = (data) => {
    alert("Success");
    console.log(data);
  };

  return (
    <Form className={style.form} asChild>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.fields}>
          <FieldsClientDetails reg={register} errors={errors} />
          <FieldsJobType reg={register} control={control} errors={errors} />
          <FieldsServiceLocation
            reg={register}
            control={control}
            errors={errors}
          />
          <FieldsScheduled reg={register} control={control} errors={errors} />
        </div>
        <div className={style.wrap_btn}>
          <Button>Create job</Button>
          <Button appearance="secondary" type="button">
            Save info
          </Button>
        </div>
      </form>
    </Form>
  );
};
