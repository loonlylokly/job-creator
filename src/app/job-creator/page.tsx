"use client";
import { Suspense } from "react";
import { JobCreator } from "@/widgets/jobCreator/JobCreator";
import { PipedriveModal } from "../../features/pipedriveModal/PipedriveModal";

export default function Page() {
  return (
    <Suspense>
      <PipedriveModal>
        <JobCreator />
      </PipedriveModal>
    </Suspense>
  );
}
