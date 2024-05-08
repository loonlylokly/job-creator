import React, { useState, createContext, useEffect } from "react";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

const SdkContext = createContext({ sdk });

const SdkContextProvider = ({ id, children }) => {
  const [sdk, setSdk] = useState(null);
  console.log("provider", id, sdk);

  useEffect(() => {
    const initialize = async () => {
      console.log("provider", id, sdk);
      try {
        const sdk = new AppExtensionsSDK();

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
