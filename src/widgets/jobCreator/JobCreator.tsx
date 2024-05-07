"use client";
import { Form } from "@radix-ui/react-form";
import { Button } from "@/shared/ui/button/Button";
import { FieldsClientDetails } from "./ui/fields/fieldsClientDetails/FieldsClientDetails";
import { FieldsJobType } from "./ui/fields/fieldsJobType/FieldsJobType";
import { FieldsScheduled } from "./ui/fields/fieldsScheduled/FieldsScheduled";
import { FieldsServiceLocation } from "./ui/fields/fieldsServiceLocation/FieldsServiceLocation";

import style from "./JobCreator.module.css";

export const JobCreator = () => {
  console.log("Job Creator");

  return (
    <Form className={style.form}>
      <div className={style.fields}>
        <FieldsClientDetails />
        <FieldsJobType />
        <FieldsServiceLocation />
        <FieldsScheduled />
      </div>
      <div className={style.wrap_btn}>
        <Button>Create job</Button>
        <Button appearance="secondary" type="button">
          Save info
        </Button>
      </div>
    </Form>
  );
};
