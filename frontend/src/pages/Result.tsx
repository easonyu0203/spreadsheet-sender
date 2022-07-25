import React, { useEffect, useState } from "react";
import useArticleContext from "../contexts/ArticleContext";
import useSheetContext from "../contexts/sheetContext";
import useArticleInstancing from "../hooks/ulti/useArticleInstacing";

import devSheet from "./Sheet.json";

type Props = {};

let proccessing: boolean = false;


const Result = (props: Props) => {
  const {
    state: { titleES, contentES, extraES },
  } = useArticleContext();
  const {
    state: { sheetHeaders, sheetRows},
  } = useSheetContext();
  const filterRowIndices = sheetRows.map((v, i)=> (v.picked)?i:-1).filter(v=> v!==-1);
  const articles = useArticleInstancing({rowIndice: filterRowIndices});

  const doMailSenderThing = () => {
    if (proccessing) return;
    proccessing = true;
    //======//
    console.log(articles)

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
