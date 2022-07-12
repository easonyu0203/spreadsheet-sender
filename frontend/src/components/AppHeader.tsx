import React from "react";

type Props = {
  logoWhite?: boolean;
};

const AppHeader = ({ logoWhite }: Props) => {
  return (
    <div className=" absolute flex justify-between items-center w-full flex-initial bg-slate-100/0 h-16">
      <button className={" mx-20 " + (logoWhite?  "text-bWhite": "text-bBlack")}>
        Spreadsheet Sender
      </button>
      <button className=" mx-20 text-bBlack">Contact Us</button>
    </div>
  );
};

export default AppHeader;
