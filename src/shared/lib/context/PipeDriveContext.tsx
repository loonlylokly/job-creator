import { createContext, useContext } from "react";

export const PipeDriveContext = createContext<any | undefined>(undefined);
export function usePipeDriveContext() {
  const sdk = useContext(PipeDriveContext);
  if (sdk === undefined) {
    throw new Error("usePipeDriveContext must be used with a PipeDriveContext");
  }
  return sdk;
}
