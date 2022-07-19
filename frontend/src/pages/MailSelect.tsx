import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import BoardFooter from "../components/mailSelect/BoardFooter";
import BoardHeader from "../components/mailSelect/BoardHeader";
import BoardRows, { Row } from "../components/mailSelect/BoardRows";
import Step2Text from "../components/mailSelect/Step2Text";
import useSheetContext from "../contexts/sheetContext";
import devSheetData from "./test1";

type Props = {};

const MailSelect = (props: Props) => {
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

  // set display board using sheet data
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
        return { data: row, picked: true, show: true };
      })
    );
  }, [sheetData]);

  const ScrollSyncDict = useRef<{ [key: number]: HTMLElement }>({});
  const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const v = e.currentTarget.scrollLeft;
    Object.keys(ScrollSyncDict.current).forEach((i) => {
      (
        ScrollSyncDict.current[i as unknown as number] as HTMLDivElement
      ).scrollLeft = v;
    });
  };


  return (
    <div className=" pt-32 h-screen flex flex-col justify-start items-center space-y-6">
      <Step2Text />
      {/* BOARD */}
      <div className=" h-[75%] min-w-[70%] w-[85%] pb-4 shadow-[0px_4px_15px_rgba(0,0,0,0.1)] rounded-3xl">
        <div className="flex flex-col space-y-4 w-full h-full">
          <BoardHeader
            headers={headers}
            onPickAll={() => {
              rows.forEach(row=>row.picked = false);
              setRows([...rows]);
            }}
            onScroll={onScroll}
            ScrollSyncDict={ScrollSyncDict}
          />
          <BoardRows
            rows={rows}
            setRows={setRows}
            onScroll={onScroll}
            ScrollSyncDict={ScrollSyncDict}
          />
          <BoardFooter
          rows={rows}
          setRows={setRows}
           />
        </div>
      </div>
    </div>
  );
};

export default MailSelect;
