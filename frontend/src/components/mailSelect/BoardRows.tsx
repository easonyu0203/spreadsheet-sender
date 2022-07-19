import React, { useEffect } from "react";

export interface Row {
  data: string[];
  picked: boolean;
  show: boolean;
}

type Props = {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
  onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  ScrollSyncDict: React.MutableRefObject<{
    [key: number]: HTMLElement;
  }>;
};

const BoardRows = ({ rows, setRows, onScroll, ScrollSyncDict }: Props) => {
  return (
    <div className=" overflow-auto flex-auto mr-4">
      {rows.map((row, i) => {
        return (
          <div
            key={i}
            className={
              " ease-in-out " + (row.show ? "" : " scale-y-0 h-0 opacity-0")
            }
          >
            <div className=" flex justify-between items-center px-6">
              <div className=" flex">
                {row.data.slice(0, 2).map((v, i) => {
                  const a = ["36", "48"];
                  return (
                    <div
                      className={" overflow-hidden pr-1 text-sm pt-2 w-" + a[i]}
                      key={i}
                    >
                      {v}
                    </div>
                  );
                })}
                <div
                  ref={(ref) => {
                    if (ref !== null) ScrollSyncDict.current[i + 1] = ref;
                  }}
                  onScroll={onScroll}
                  className=" w-80 overflow-x-auto DContent Flipped relative"
                >
                  <div className="FContent flex pt-2">
                    {row.data.slice(2).map((v, i) => {
                      return (
                        <div className=" text-sm pr-1 flex-none w-36" key={i}>
                          {v}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                className=" h-5 aspect-square bg-[#E9E9E9] rounded-full mt-3 mr-4 flex justify-center items-center"
                onClick={() => {
                  rows[i].picked = !rows[i].picked;
                  setRows([...rows]);
                }}
              >
                {row.picked && (
                  <div className=" h-3 aspect-square bg-bPurple rounded-full" />
                )}
              </button>
            </div>

            {rows.length !== 0 && rows.length - 1 !== i && (
              <hr className=" bg-slate-300 border-slate-300 border-[1px] mx-4 mt-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BoardRows;
