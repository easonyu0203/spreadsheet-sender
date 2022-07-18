import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaGoogleDrive } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";
import { useGooglePicker } from "../../hooks/google/useDrivePicker";
import { GooglePickerDocument } from "../../type/Google";
import useSheetContext from "../../contexts/sheetContext";

const gDriveStyle =
  " bg-bPurple text-bWhite text-sm \
         border-2 hover:border-slate-800  ";
const gDriveNotReadyStyle =
  " bg-bPurple text-bWhite text-sm \
border-2 bg-slate-100 text-slate-400";

const SheetUploadZone = () => {
  // sheet data
  const {
    state: { sheetData },
    sender,
  } = useSheetContext();

  // drop zone
  const [dropEnable, setDropEnable] = useState(true);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: !dropEnable,
  });

  // google drive upload file
  const [pickerReady, createPicker] = useGooglePicker();
  const onPicked = async (doc: GooglePickerDocument) => {
    let docID: string = doc["id"];
    let response;
    response = await window.gapi.client.sheets.spreadsheets.get({
      spreadsheetId: docID,
      includeGridData: true,
    });
    let data = response.result.sheets[0].data[0].rowData.map((d: any) =>
      d["values"].map((d: any) => d["formattedValue"])
    );
    sender({ type: "SET_SHEET", payload: data });
  };


  return (
    <div className=" flex flex-col space-y-3 h-full">
      <button
        onClick={() => createPicker(onPicked)}
        disabled={!pickerReady}
        className={
          `flex justify-center items-center space-x-2 p-2 rounded w-full text-center transition` +
          (pickerReady ? gDriveStyle : gDriveNotReadyStyle)
        }
      >
        <FaGoogleDrive />
        <div>Browse file on Google Drive</div>
      </button>
      <div className="flex items-center space-x-2">
        <div className=" flex-auto border-[1px] border-[#AFAFAF] bg-[#AFAFAF] rounded h-0"></div>
        <div className=" text-[#333333] text-sm">OR</div>
        <div className=" flex-auto border-[1px] border-[#AFAFAF] bg-[#AFAFAF] rounded h-0"></div>
      </div>
      <div
        {...getRootProps({
          className:
            " w-full h-full rounded-2xl bg-[#F6F6F6] cursor-pointer shadow-[inset_0px_4px_15px_rgba(0,0,0,0.1)]",
        })}
      >
        <input {...getInputProps()} />
        <div className=" w-full h-full flex flex-col justify-center items-center space-y-3">
          <BiUpload className=" text-[4rem]" />
          <div className=" font-light text-sm">Drog csv file here</div>
        </div>
      </div>
    </div>
  );
};

export default SheetUploadZone;
