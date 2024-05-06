"use client";
import { Suspense } from "react";
import { JobCreator } from "@/widgets/jobCreator/JobCreator";
import { Wrapper } from "../features/wrapper/Wrapper";

export default function Page() {
  return (
    <Suspense>
      <Wrapper>
        <JobCreator />
      </Wrapper>
    </Suspense>
  );
}
