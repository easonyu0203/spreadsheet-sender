import React, { useEffect, useState } from "react";
import useArticleContext from "../contexts/ArticleContext";
import useSheetContext from "../contexts/sheetContext";
import { useGmail } from "../hooks/google/useGmail";
import useArticleInstancing from "../hooks/ulti/useArticleInstacing";
import { MailOptions } from "../type/Mail";

import devSheet from "./Sheet.json";

type Props = {};

let proccessing: boolean = false;

const Result = (props: Props) => {
  const {
    state: { titleES, contentES, extraES },
  } = useArticleContext();
  const {
    state: { sheetHeaders, sheetRows },
  } = useSheetContext();
  const filterRowIndices = sheetRows
    .map((v, i) => (v.picked ? i : -1))
    .filter((v) => v !== -1);
  const htmlArticles = useArticleInstancing({ rowIndice: filterRowIndices });
  const textArticles = htmlArticles.map((e) => {
    return {
      titleHTML: e.titleHTML.replace(/<[^>]+>/g, ""),
      contentHTML: e.contentHTML.replace(/<[^>]+>/g, ""),
      extraHTML: e.extraHTML.replace(/<[^>]+>/g, ""),
    };
  });

  const [gmailReady, sendGmail] = useGmail();

  const doMailSenderThing = () => {
    if (proccessing) return;
    proccessing = true;
    //======//
    const emailIndex = sheetHeaders.findIndex(v=>v==="email");
    const row = sheetRows[filterRowIndices[0]].data;
    const mailConfig: MailOptions = {
        to: row[emailIndex],
        subject: textArticles[0].titleHTML,
        text: textArticles[0].contentHTML,
        html: htmlArticles[0].contentHTML
    }
    sendGmail(mailConfig);
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
