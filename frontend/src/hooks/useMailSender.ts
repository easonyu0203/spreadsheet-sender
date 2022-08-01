import React, { useEffect } from "react";
import useArticleContext from "../contexts/ArticleContext";
import useSheetContext from "../contexts/sheetContext";
import { MailOptions } from "../type/Mail";
import { useGmail } from "./google/useGmail";
import useArticleInstancing from "./ulti/useArticleInstacing";
import generateEmailArticle from "../mailTemplates/template1";
let proccessing: boolean = false;
const useMailSender = () => {
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
  const ready = gmailReady;
  return {ready, doMailSenderThing}
};
export default useMailSender;


