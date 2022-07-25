import { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { useNavigate } from "react-router-dom";
import TextEditor from "../components/mailWrite/TextEditor";
import useSheetContext, { SheetPayload } from "../contexts/sheetContext";
import devSheet from "./Sheet.json";
import { Link } from "react-router-dom";
import useArticleContext from "../contexts/ArticleContext";
import useMailSender from "../hooks/useMailSender";
import useArticleInstancing from "../hooks/ulti/useArticleInstacing";

const MailWrite = () => {
  const { sender: sheetSender } = useSheetContext();
  const {
    state: { titleES, contentES, extraES },
    sender: articleSender,
  } = useArticleContext();
  const { titleHTML, contentHTML, extraHTML } = useArticleInstancing({
    template: true,
  })[0];
  const navigate = useNavigate();


  const onClickSend = () => {
    // navigate to result page
    navigate("/result");
  };

  // debug use test sheet
  useEffect(() => {
    if (import.meta.env.DEV) {
      sheetSender({ type: "SET_SHEET", payload: devSheet });
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
                state={{
                  editorState: titleES,
                  setEditorState: (editorState: EditorState) =>
                    articleSender({
                      type: "SET_TITLE",
                      payload: { editorState },
                    }),
                }}
              />
            </div>
            <div>
              <TextEditor
                title={"Content"}
                inlineStyleButton={true}
                keyCommand={true}
                className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] w-full h-36 overflow-auto"
                state={{
                  editorState: contentES,
                  setEditorState: (editorState: EditorState) =>
                    articleSender({
                      type: "SET_CONTEXT",
                      payload: { editorState },
                    }),
                }}
              />
            </div>
            <div>
              <TextEditor
                title="Extra information e.g. contact, banner"
                className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] h-24"
                state={{
                  editorState: extraES,
                  setEditorState: (editorState: EditorState) =>
                    articleSender({
                      type: "SET_EXTRA",
                      payload: { editorState },
                    }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex-auto flex flex-col justify-end pl-6">
          <div className=" w-full h-[90%] rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.1)] py-8 px-7 flex flex-col justify-between">
            <div className=" ">
              <h1
                className=" font-semibold text-xl"
                dangerouslySetInnerHTML={{
                  __html: titleHTML,
                }}
              ></h1>
              <hr className=" mt-2 bg-black border-1 border-black " />
              <div
                className="mt-2 text-base"
                dangerouslySetInnerHTML={{
                  __html: contentHTML,
                }}
              ></div>
            </div>
            <div>
              <hr className=" mt-2 bg-black border-1 border-black opacity-30" />
              <div
                className=" opacity-30 text-sm"
                dangerouslySetInnerHTML={{
                  __html: extraHTML,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-initial h-24 flex justify-between pt-4">
        <Link
          to="/mail-select"
          className=" bg-bPurple text-bWhite rounded w-24 h-9 flex justify-center items-center"
        >
          Back
        </Link>
        <button
          onClick={onClickSend}
          className=" bg-bPurple text-bWhite rounded w-24 h-9"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MailWrite;
