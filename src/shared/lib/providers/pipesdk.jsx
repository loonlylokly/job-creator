import React, { useState, createContext, useEffect } from "react";
import SurfaceSDK from "@pipedrive/custom-app-surfaces-sdk";

const SdkContext = createContext({ sdk: null });

const SdkContextProvider = ({ id, children }) => {
  const [sdk, setSdk] = useState(null);
  console.log("provider", id, sdk);

  useEffect(() => {
    const initialize = async () => {
      console.log("provider", id, sdk);
      try {
        const sdk = new SurfaceSDK();

        await sdk.initialize();

        setSdk(sdk);
      } catch (error) {
        console.log("Surface error");
      }
    };

    initialize().catch(console.error);
  }, [id]);

  return <SdkContext.Provider value={sdk}>{children}</SdkContext.Provider>;
};

export { SdkContext, SdkContextProvider };
