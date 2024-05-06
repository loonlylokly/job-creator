"use client";
import useSdk from "@/shared/lib/hooks/useSdk";
import { SdkContextProvider } from "@/shared/lib/providers/pipesdk";
import { Command } from "@pipedrive/custom-app-surfaces-sdk";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const JobCreator = () => {
  const sdk: any = useSdk();

  console.log("Job Creator");

  useEffect(() => {
    console.log("resize1");
    if (!sdk || !sdk.execute) {
      return;
    }

    console.log("resize2");
    sdk.execute(Command.RESIZE, { height: 700 });
  }, [sdk]);
  return <h1>Job Creator</h1>;
};
