import React from "react";
import { IconType } from "react-icons";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";


type Props = {
    success: boolean,
};

const ResultBoard = ({success}: Props) => {
    const textColorStyle = success? "text-bPurple" : "text-[#FF3188]"
  return (
    <div className=" flex-1 flex flex-col space-y-8 ">
      <div className=" flex items-center space-x-4">
        <div className={" text-[5rem] pt-1 " + textColorStyle}>
           {success?<HiCheckCircle />:<HiXCircle/>}
        </div>
        <div className=" flex flex-col">
          <div className={" text-4xl font-semibold " + textColorStyle}>
            {success?"Success!":"Fail..."}
          </div>
          <div className={" text-base font-semibold " + textColorStyle}>
            {success?`You have sent 23 mails within second.`:`3 Mail are not able to sent out.`}
          </div>
        </div>
      </div>
      <div className=" px-8 py-5 space-y-6 rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
        <div className=" text-base font-semibold">
            {success?"Success Mail list":"Fail Mail list"}
        </div>
        <div className=" h-64 w-4/5 overflow-auto space-y-3">
          <div className=" flex flex-col">
            <div className=" flex justify-between">
              <div>Eason</div>
              <div>Breaking0203</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBoard;
