"use client";
import { Suspense } from "react";
import { JobCreator } from "@/widgets/jobCreator/JobCreator";
import { PipedriveModal } from "../../features/pipedriveModal/PipedriveModal";

import style from "./page.module.css";

export default function Page() {
  return (
    <main className={style.main}>
      <Suspense>
        <PipedriveModal>
          <JobCreator />
        </PipedriveModal>
      </Suspense>
    </main>
  );
}
