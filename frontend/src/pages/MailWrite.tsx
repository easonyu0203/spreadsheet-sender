import { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import TextEditor from "../components/mailWrite/TextEditor";
import useSheetContext, { SheetPayload } from "../contexts/sheetContext";
import devSheet from "./Sheet.json";

const MailWrite = () => {
  const { sender } = useSheetContext();
  const [titleES, setTitleES] = useState(EditorState.createEmpty());
  const [contentES, SetContentES] = useState(EditorState.createEmpty());
  const [extraES, setextraES] = useState(EditorState.createEmpty());

  // debug use test sheet
  useEffect(() => {
    if (import.meta.env.DEV) {
      sender({ type: "SET_SHEET", payload: devSheet });
    }
  }, []);

  return (
    <div className=" w-screen h-screen flex flex-col pt-16  px-16">
      <div className=" flex-auto flex">
        <div className="w-[50%] flex-auto flex flex-col space-y-10 justify-between pt-5 pr-6">
          <div>
            <div className=" text-sm font-semibold">step 3</div>
            <div className=" text-4xl font-semibold">Write the mail</div>
          </div>
          <div className=" flex-auto flex flex-col space-y-4">
            <div>
              <TextEditor
                title="Title"
                className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)]"
                state={{ editorState: titleES, setEditorState: setTitleES }}
              />
            </div>
            <div>
              <TextEditor
                title={"Content"}
                inlineStyleButton={true}
                keyCommand={true}
                className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] w-full h-36 overflow-auto"
                state={{ editorState: contentES, setEditorState: SetContentES }}
              />
            </div>
            <div>
              <TextEditor
                title="Extra information e.g. contact, banner"
                className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] h-24"
                state={{ editorState: extraES, setEditorState: setextraES }}
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex-auto flex flex-col justify-end pl-6">
          <div className=" w-full h-[90%] rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.1)] py-8 px-7 flex flex-col justify-between">
            <div className=" ">
            <h1 className=" font-semibold text-xl" dangerouslySetInnerHTML={{__html: stateToHTML(titleES.getCurrentContent())}}></h1>
            <hr className=" mt-2 bg-black border-1 border-black " />
            <div className="mt-2 text-base" dangerouslySetInnerHTML={{__html: stateToHTML(contentES.getCurrentContent())}}></div>
            </div>
            <div>
            <hr className=" mt-2 bg-black border-1 border-black opacity-30" />
            <div className=" opacity-30 text-sm" dangerouslySetInnerHTML={{__html: stateToHTML(extraES.getCurrentContent())}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-initial h-24 flex justify-between pt-4">
        <button className=" bg-bPurple text-bWhite rounded w-24 h-9">
          Back
        </button>
        <button className=" bg-bPurple text-bWhite rounded w-24 h-9">
          Send
        </button>
      </div>
    </div>
  );
};

export default MailWrite;
