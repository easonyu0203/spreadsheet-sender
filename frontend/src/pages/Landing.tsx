import React from "react";
import { ReactFitty } from "react-fitty";
import SheetUploadZone from "../components/landing/SheetUploadZone";


type Props = {};

const Landing = (props: Props) => {
  return(
    <div className=" w-screen h-screen flex" >
      {/* left */}
      <div className=" flex-initial w-[50%] h-full bg-bPurple border-2 border-bBlack shadow flex justify-center items-center">
        <div className={` w-[70%] aspect-square rounded-full bg-bWhite flex justify-center items-center`}>something here</div>
      </div>
      {/* right */}
      <div className=" flex-auto h-full bg-bWhite flex flex-col justify-top px-20 pt-16 pb-16">
      <div className=" flex-initial h-28"></div>
        <div className=" flex flex-col">
          <div className=" text-sm font-bold">Step 1</div>
          <div  className={` w-full font-bold`}>
            <ReactFitty>
             Upload your Spreadsheet
            </ReactFitty>
            </div>
        </div>
        <div className="flex-initial h-28"></div>
        <div className=" flex-auto">
          <SheetUploadZone/>
        </div>
      </div>
    </div>
  )
}

export default Landing;
