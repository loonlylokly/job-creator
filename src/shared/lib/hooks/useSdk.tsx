import { useContext } from "react";
import { SdkContext } from "../providers/pipesdk";

export default function useSdk() {
  return useContext(SdkContext);
}
