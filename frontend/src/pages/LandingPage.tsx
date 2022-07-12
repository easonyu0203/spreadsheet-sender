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

// const Landing = (props: Props) => {
//   return (
//     <div className=" w-full h-[92vh] flex-auto bg-slate-200 shadow-inner">
//       <div
//         id="work-space"
//         className="p-6 h-3/5 pt-10 flex flex-col items-center"
//       >
//         <p
//           id="descript-text"
//           className=" font-mono text-base text-slate-600 text-center pt-6 pb-10"
//         >
//           easily send email to everyone using spreadsheat
//         </p>
//         <SheetUploadZone />
//       </div>
//       <div className=" w-full h-2/5 pt-2" id="instruct">
//         <div className="h-full flex flex-col justify-center items-center">
//           <h1 className="pt-4 text-xl font-semibold flex-initial">How to send email from spreadsheat</h1>
//           <div className="w-full flex-auto flex justify-center items-start px-10 pt-2 space-x-8">
//               <StepDesc stepNum={1}>upload the csv or spreadsheat you wish to send email</StepDesc>
//               <StepDesc stepNum={2}>write the email using spreadsheat data</StepDesc>
//               <StepDesc stepNum={3}>your email will be send to everyone in the spreadsheat</StepDesc>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Landing;
