"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SdkContextProvider } from "@/shared/lib/providers/pipesdk";
import { Command, Event } from "@pipedrive/custom-app-surfaces-sdk";
import useSdk from "@/shared/lib/hooks/useSdk";
import { checkHeight, checkWidth } from "@/shared/lib/helpers/common";

import style from "./PipedriveModal.module.css";

export const PipedriveModal = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const sdk: any = useSdk();

  useEffect(() => {
    console.log("resize1", height, width);
    if (!sdk || !sdk.execute || height === 0 || width === 0) {
      return;
    }

    console.log("resize2");
    console.log(height, width);
    sdk.execute(Command.RESIZE, { height, width });
  }, [height, sdk, width]);

  useEffect(() => {
    console.log(
      "visibility change unsub 1",
      height,
      width,
      elementRef.current?.clientHeight,
      elementRef.current?.clientWidth
    );
    if (!sdk || !sdk.listen) {
      return () => {};
    }

    console.log("visibility change unsub 2", height, width);
    const visibilityChangeUnsubscribe = sdk.listen(Event.VISIBILITY, ({}) => {
      setHeight(checkHeight(elementRef.current?.clientHeight));
      setWidth(checkWidth(elementRef.current?.clientWidth));
    });

    return () => {
      visibilityChangeUnsubscribe();
    };
  }, [sdk, elementRef]);

  useEffect(() => {
    console.log(
      "handleResize 1",
      height,
      width,
      elementRef.current?.clientHeight,
      elementRef.current?.clientWidth
    );
    function handleResize() {
      console.log("handleResize 2", height, width);
      setHeight(checkHeight(elementRef.current?.clientHeight));
      setWidth(checkWidth(elementRef.current?.clientWidth));
    }

    console.log("handleResize 3", height, width);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  useEffect(() => {
    console.log(
      "elementRef useEffect",
      height,
      width,
      elementRef.current?.clientHeight,
      elementRef.current?.clientWidth
    );
    setHeight(checkHeight(elementRef?.current?.clientHeight));
    setWidth(checkWidth(elementRef?.current?.clientWidth));
  }, [elementRef.current?.clientHeight, elementRef.current?.clientWidth]);

  return (
    <SdkContextProvider id={searchParams.get("id")}>
      <div className={style.modal} ref={elementRef}>
        {children}
      </div>
    </SdkContextProvider>
  );
};
