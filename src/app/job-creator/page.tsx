"use client";
import { useSearchParams } from "next/navigation";
import { Command } from "@pipedrive/custom-app-surfaces-sdk";
import useSdk from "@/shared/lib/hooks/useSdk";
import { SdkContextProvider } from "@/shared/lib/providers/pipesdk";
import { useEffect } from "react";

export default function Page() {
  const params = useSearchParams();
  const sdk: any = useSdk();

  console.log("Job Creator");

  useEffect(() => {
    console.log("resize1");
    if (!sdk) {
      return;
    }

    console.log("resize2");
    sdk.execute(Command.RESIZE, { height: 700 });
  }, [sdk]);

  return (
    <SdkContextProvider id={params.get("id")}>
      <div>Job Creator</div>;
    </SdkContextProvider>
  );
}
