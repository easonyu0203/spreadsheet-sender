import { AiFillCheckCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import useArticleContext from "../contexts/ArticleContext";
import useSheetContext from "../contexts/sheetContext";
import { useGmail } from "../hooks/google/useGmail";
import useArticleInstancing from "../hooks/ulti/useArticleInstacing";
import useMailSender from "../hooks/useMailSender";
import { MailOptions } from "../type/Mail";

import devSheet from "./Sheet.json";
import ResultBoard from "../components/Result/ResultBoard";

type Props = {};

const Result = (props: Props) => {
  const { ready, doMailSenderThing } = useMailSender();

  // debug use test sheet
  const { sender: sheetSender } = useSheetContext();
  useEffect(() => {
    if (import.meta.env.DEV) {
      sheetSender({ type: "SET_SHEET", payload: devSheet });
    }
  }, []);

  return (
    <div className=" h-screen w-screen pt-16 pb-8 px-[12%] flex flex-col space-y-10 justify-center items-center">
      <div className=" flex w-full justify-between space-x-14">
        <ResultBoard success={true}/>
        
        <ResultBoard success={false}/>
      </div>
      <div className=" w-full flex justify-end space-x-3">
        <button className=" bg-bPurple text-bWhite rounded py-1 px-6">Download Result</button>
        <button className=" bg-bPurple text-bWhite rounded py-1 px-6">Send the result to my account</button>
      </div>
    </div>
  );
};

export default Result;
