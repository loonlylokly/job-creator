"use client";
import { Form, Submit as FormSubmit } from "@radix-ui/react-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Command } from "@pipedrive/app-extensions-sdk";
import { useSearchParams } from "next/navigation";

import { usePipeDriveContext } from "@/shared/lib/context/PipeDriveContext";
import { updateDealFields } from "@/shared/api/Deals";
import { Button } from "@/shared/ui/button/Button";
import { SJob } from "@/shared/types/schemas/job";
import { TJob } from "@/shared/types/job";

import { FieldsClientDetails } from "./ui/fields/fieldsClientDetails/FieldsClientDetails";
import { FieldsJobType } from "./ui/fields/fieldsJobType/FieldsJobType";
import { FieldsScheduled } from "./ui/fields/fieldsScheduled/FieldsScheduled";
import { FieldsServiceLocation } from "./ui/fields/fieldsServiceLocation/FieldsServiceLocation";

import style from "./JobCreator.module.css";

export const JobCreator = ({
  defaultFieldValue,
}: {
  defaultFieldValue: any;
}) => {
  const searchParams = useSearchParams();
  const dealId = searchParams.get("selectedIds") || "";
  const userId = searchParams.get("userId") || "";
  const companyId = searchParams.get("companyId") || "";
  const sdk: any = usePipeDriveContext();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<TJob>({
    defaultValues: defaultFieldValue,
    mode: "onSubmit",
    resolver: zodResolver(SJob),
  });

  const onSubmit: SubmitHandler<TJob> = async (data) => {
    try {
      await updateDealFields(dealId, userId, companyId, data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    sdk.execute(Command.CLOSE_MODAL);
  };

  if (isSubmitSuccessful) {
    return (
      <>
        <h2>Submit success</h2>
        <h2 className={style.fakeLink} onClick={() => handleClick()}>
          Open Deal
        </h2>
      </>
    );
  }

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
          <FormSubmit asChild>
            <Button type="submit" disabled={isSubmitting}>
              Create job
            </Button>
          </FormSubmit>
          <Button
            appearance="secondary"
            type="button"
            onClick={() => handleClick()}
          >
            Save info
          </Button>
        </div>
      </form>
    </Form>
  );
};
