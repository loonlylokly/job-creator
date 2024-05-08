"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import style from "./PipedriveModal.module.css";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";
import { PipeDriveContext } from "@/shared/lib/context/PipeDriveContext";
import { useQuery } from "@tanstack/react-query";
import { getFieldValues } from "@/shared/api/Deals";
import { TJob } from "@/shared/types/job";
import { convertFieldsToForm } from "@/shared/lib/helpers/Deal";
import { JobCreator } from "@/widgets/jobCreator/JobCreator";

export const PipedriveModal = () => {
  const searchParams = useSearchParams();
  const dealId = searchParams.get("selectedIds") || "";
  const userId = searchParams.get("userId") || "";
  const companyId = searchParams.get("companyId") || "";
  const id = searchParams.get("id") || undefined;
  const [sdk, setSdk] = useState<any>(null);
  const { data: fieldValues, isLoading } = useQuery<TJob>({
    queryFn: ({ signal }) => getFieldValues(dealId, userId, companyId, signal),
    queryKey: ["fields", dealId, userId, companyId],
    retry: 3,
  });

  useEffect(() => {
    const initialize = async () => {
      try {
        const newSdk = await new AppExtensionsSDK().initialize({
          size: {
            height: 600,
            width: 750,
          },
        });
        setSdk(newSdk);
      } catch (error) {
        console.log("Surface error");
      }
    };
    initialize().catch(console.error);
  }, [id]);

  return (
    <PipeDriveContext.Provider value={sdk}>
      <div className={style.modal}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <JobCreator defaultFieldValue={fieldValues} />
        )}
      </div>
    </PipeDriveContext.Provider>
  );
};
