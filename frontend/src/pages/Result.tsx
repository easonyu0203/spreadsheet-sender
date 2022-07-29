import React, { useEffect, useState } from "react";
import useArticleContext from "../contexts/ArticleContext";
import useSheetContext from "../contexts/sheetContext";
import { useGmail } from "../hooks/google/useGmail";
import useArticleInstancing from "../hooks/ulti/useArticleInstacing";
import { MailOptions } from "../type/Mail";

import generateEmailArticle from "../mailTemplates/template1";

import devSheet from "./Sheet.json";

type Props = {};

let proccessing: boolean = false;

const Result = (props: Props) => {
  const {
    state: { sheetHeaders, sheetRows },
  } = useSheetContext();
  const filterRowIndices = sheetRows
    .map((v, i) => (v.picked ? i : -1))
    .filter((v) => v !== -1);
  const htmlArticles = useArticleInstancing({ rowIndice: filterRowIndices });
  const textArticles = htmlArticles.map((e) => {
    return {
      titleText: e.titleHTML.replace(/<[^>]+>/g, ""),
      contentText: e.contentHTML.replace(/<[^>]+>/g, ""),
      extraText: e.extraHTML.replace(/<[^>]+>/g, ""),
    };
  });

  const [gmailReady, sendGmail] = useGmail();

  const doMailSenderThing = () => {
    if (proccessing) return;
    proccessing = true;
    //======//
    const emailIndex = sheetHeaders.findIndex((v) => v === "email");
    const emailAddresses = sheetRows
      .filter((v, i) => filterRowIndices.includes(i))
      .map((v) => v.data[emailIndex]);
      console.log(emailAddresses)
    for (let i = 0; i < emailAddresses.length; i++) {
      const emailAddress = emailAddresses[i];
      const { titleText, contentText, extraText } = textArticles[i];
      const { titleHTML, contentHTML, extraHTML } = htmlArticles[i];
      const mailConfig: MailOptions = {
        to: emailAddress,
        subject: titleText,
        text: `${contentText}\n\n\n${extraText}`,
        html: generateEmailArticle(titleHTML, contentHTML, extraHTML),
      };
      sendGmail(mailConfig);
    }
    //======//
    proccessing = false;
  };

  // debug use test sheet
  const { sender: sheetSender } = useSheetContext();
  useEffect(() => {
    if (import.meta.env.DEV) {
      sheetSender({ type: "SET_SHEET", payload: devSheet });
    }
  }, []);

  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <button onClick={doMailSenderThing}>Result</button>
    </div>
  );
};

export default Result;
