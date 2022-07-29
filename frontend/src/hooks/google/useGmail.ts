import { useEffect, useState } from "react";
import axios from "axios";

import { OverridableTokenClientConfig } from "../../type/Google";
import {
  GetCurrentScope,
  GetGoogleClientEvent,
  GetTokenClient,
  useTokenClient,
} from "./useGoogleClient";
import {
  MailOptions,
  SendEmailConfig,
  SendEmailResponse,
} from "../../type/Mail";

export const useGmail = (): [
  boolean,
  (mailOptions: MailOptions) => Promise<void>
] => {
  const [ready, setReady] = useState(false);
  const [tokenClientReady, tokenClient] = useTokenClient(
    "https://www.googleapis.com/auth/gmail.send"
  );

  useEffect(() => {
    if (tokenClientReady) setReady(true);
  }, [tokenClientReady]);

  return [ready, sendGmail];
};

const sendGmail = async (mailOptions: MailOptions) => {
  const config: OverridableTokenClientConfig =
    GetCurrentScope() &&
    GetCurrentScope().includes("https://www.googleapis.com/auth/gmail.send")
      ? {}
      : {
          scope:
            "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly",
        };
  GetTokenClient().requestAccessToken(config);

  GetGoogleClientEvent().once("GetAccessToken", async (accessToken) => {
    const config: SendEmailConfig = {
      token: accessToken,
      mail: mailOptions,
    };
    const {data} = await axios.post("/test", config);
    console.log(data);
  });
};
