import React, { useEffect, useState } from "react";

type Props = {
  headers: string[];
  onPickAll: () => void;
  onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  ScrollSyncDict: React.MutableRefObject<{
    [key: number]: HTMLElement;
  }>;
};

const BoardHeader = ({
  headers,
  onPickAll,
  onScroll,
  ScrollSyncDict,
}: Props) => {
  const [haveBar, setHaveBar] = useState(false)
  return (
    <div className=" flex-initial">
      <div className=" flex justify-between items-center px-6 pt-6">
        {/* Fix columns */}
        <div className=" flex">
          {headers.slice(0, 2).map((v, i) => {
            const a = [" w-36", " w-48"];
            return (
              <div className={" font-semibold pt-2" + a[i]} key={i}>
                {v}
              </div>
            );
          })}
          {/* scrollable columns */}
          <div
            ref={(ref) => {
              if (ref !== null) {
                ScrollSyncDict.current[0] = ref;
                setHaveBar(ref.scrollWidth !== ref.clientWidth);
              }
            }}
            onScroll={onScroll}
            className={" w-80 overflow-x-auto Flipped relative" + (haveBar && " top-[-7px]")}
          >
            <div className="FContent flex pt-2">
              {headers.slice(2).map((v, i) => {
                return (
                  <div className=" font-semibold flex-none w-36" key={i}>
                    {v}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={onPickAll}
          className=" ml-10 bg-bPurple rounded text-slate-50 w-28 h-7"
        >
          Pick all
        </button>
      </div>
    </div>
  );
};

export default BoardHeader;
