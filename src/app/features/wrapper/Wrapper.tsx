"use client";
import { SdkContextProvider } from "@/shared/lib/providers/pipesdk";
import { useSearchParams } from "next/navigation";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  return (
    <SdkContextProvider id={searchParams.get("id")}>
      {children}
    </SdkContextProvider>
  );
};
