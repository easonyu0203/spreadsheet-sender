import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import useSheetContext from "../contexts/sheetContext";
import devSheetData from "./test1";

type Props = {};

interface Row {
  data: string[];
  show: boolean;
}

const MailRecieverSelection = (props: Props) => {
  const {
    state: { sheetData },
    sender,
  } = useSheetContext();

  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<Row[]>([]);

  if (import.meta.env.DEV) {
    useEffect(() => {
      sender({ type: "SET_SHEET", payload: devSheetData });
    }, []);
  }

  useEffect(() => {
    if (sheetData.length === 0) return;
    let _sheetData: string[][] = JSON.parse(JSON.stringify(sheetData));
    const _headers = _sheetData[0];
    // get name & email header index
    let nameIndex: number | undefined, emailIndex: number | undefined;
    _headers.forEach((header, index) => {
      if (header.toLowerCase().includes("name")) {
        nameIndex = index;
      } else if (header.toLowerCase().includes("mail")) {
        emailIndex = index;
      }
    });
    if (nameIndex === undefined) throw new Error("don't have name header");
    if (emailIndex === undefined) throw new Error("don't have email header");
    if (nameIndex === undefined || emailIndex === undefined) return;
    // prefix name and email header
    let i = Math.min(nameIndex, emailIndex),
      j = Math.max(nameIndex, emailIndex);
    _sheetData = _sheetData.map((row) =>
      [row[nameIndex!]]
        .concat([row[emailIndex!]])
        .concat(row.slice(0, i))
        .concat(row.slice(i + 1, j))
        .concat(row.slice(j + 1))
    );
    // set header and row
    console.log(_sheetData);
    setHeaders(_sheetData[0]);
    setRows(
      _sheetData.slice(1).map((row) => {
        return { data: row, show: true };
      })
    );
  }, [sheetData]);

  return (
    <div className=" pt-32 h-screen flex flex-col justify-start items-center space-y-6">
      {/* STEP 2 TEXT */}
      <div className="">
        <div className=" font-bold text-sm">Step 2</div>
        <div className=" font-semibold text-4xl">
          Select the people you want to send mail
        </div>
      </div>

      {/* FILTER BOARD */}
      <div className=" h-[75%] min-w-[70%] w-[85%] pb-4 shadow-[0px_4px_15px_rgba(0,0,0,0.1)] rounded-3xl">
        <div className="flex flex-col space-y-4 w-full h-full">
          <ScrollSync>
          {/* Header */}
          <div className=" flex-initial">
            <div className=" flex justify-between items-center px-6 pt-6">
              {/* Fix columns */}
              <div className=" flex">
                {headers.slice(0, 2).map((v, i) => {
                  const a = ["36", "48"];
                  return (
                    <div className={" pt-2 w-" + a[i]} key={i}>
                      {v}
                    </div>
                  );
                })}
                {/* scrollable columns */}
                <div className=" w-80 overflow-x-auto Flipped relative top-[-7px]">
                  <div className="FContent flex pt-2">
                    {headers.slice(2).map((v, i) => {
                      return (
                        <div className=" flex-none w-36" key={i}>
                          {v}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button className=" ml-10 bg-bPurple rounded text-slate-50 w-28 h-7">
                Pick all
              </button>
            </div>
          </div>
          {/* Rows */}
          <div className=" overflow-auto flex-auto mr-4">
            {rows.slice(0).map((v, i) => {
              return (
                <>
                  <div
                    className=" flex justify-between items-center px-6"
                    key={i}
                  >
                    {/* Fix columns */}
                    <div className=" flex">
                      {v.data.slice(0, 2).map((v, i) => {
                        const a = ["36", "48"];
                        return (
                          <div
                            className={
                              " overflow-hidden pr-1 text-sm pt-2 w-" + a[i]
                            }
                            key={i}
                          >
                            {v}
                          </div>
                        );
                      })}
                      {/* scrollable columns */}
                      <div className=" w-80 overflow-x-auto DContent Flipped relative">
                        <div className="FContent flex pt-2">
                          {v.data.slice(2).map((v, i) => {
                            return (
                              <div
                                className=" text-sm pr-1 flex-none w-36"
                                key={i}
                              >
                                {v}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className=" h-4 aspect-square bg-[#E9E9E9] rounded-full mt-3 mr-4"></div>
                  </div>

                  {rows.length !== 0 && rows.length - 1 !== i &&
                  <hr className=" bg-slate-300 border-slate-300 border-[1px] mx-4 mt-2" />
                  }
                </>
              );
            })}
          </div>
          <div className=" flex-initial flex justify-between pr-8 pl-4">
            <form>
                <input className="p-1 pl-4 bg-[#F6F6F6] text-sm rounded-lg" placeholder="Search" type="text" name="name" />
            </form>
            <button className=" bg-bPurple text-bWhite w-28 rounded py-[2px]">
              Next
            </button>
          </div>
          </ScrollSync>
        </div>
      </div>
    </div>
  );
};

export default MailRecieverSelection;
