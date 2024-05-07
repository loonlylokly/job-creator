"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SdkContextProvider } from "@/shared/lib/providers/pipesdk";
import { Command, Event } from "@pipedrive/custom-app-surfaces-sdk";
import useSdk from "@/shared/lib/hooks/useSdk";
import { checkHeight } from "@/shared/lib/helpers/common";

import style from "./PipedriveModal.module.css";

export const PipedriveModal = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const sdk: any = useSdk();

  useEffect(() => {
    console.log("resize1");
    if (!sdk || !sdk.execute || height === 0 || width === 0) {
      return;
    }

    console.log("resize2");
    console.log(height, width);
    sdk.execute(Command.RESIZE, { height, width });
  }, [height, sdk, width]);

  useEffect(() => {
    if (!sdk || !sdk.listen) {
      return () => {};
    }

    const visibilityChangeUnsubscribe = sdk.listen(Event.VISIBILITY, ({}) => {
      setHeight(checkHeight(elementRef.current?.clientHeight));
      setWidth(checkHeight(elementRef.current?.clientWidth));
    });

    return () => {
      visibilityChangeUnsubscribe();
    };
  }, [sdk, elementRef]);

  useEffect(() => {
    function handleResize() {
      setHeight(checkHeight(elementRef.current?.clientHeight));
      setWidth(checkHeight(elementRef.current?.clientWidth));
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  useEffect(() => {
    setHeight(checkHeight(elementRef?.current?.clientHeight));
    setWidth(checkHeight(elementRef?.current?.clientWidth));
  }, [elementRef.current?.clientHeight, elementRef.current?.clientWidth]);
  return (
    <SdkContextProvider id={searchParams.get("id")}>
      <div className={style.modal} ref={elementRef}>
        {children}
      </div>
    </SdkContextProvider>
  );
};
