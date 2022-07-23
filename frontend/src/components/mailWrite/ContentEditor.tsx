import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { EditorState, RichUtils } from "draft-js";
import Editor from "draft-js-plugins-editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "draft-js-mention-plugin";
import { MentionData } from "@draft-js-plugins/mention";
import "draft-js/dist/Draft.css";
import "./css/MentionPlugin.css";
import { BiUnderline, BiBold, BiItalic } from "react-icons/bi";

type Props = {};
type InLineStype = "UNDERLINE" | "BOLD" | "ITALIC";
const mentions: MentionData[] = [
  {
    name: "Matthew Russell",
  },
  {
    name: "Julian Krispel-Samsel",
  },
];

const ContentEditor = (props: Props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  // mention
  const [suggestions, setSuggestions] = useState(mentions);
  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: "IMMUTABLE",
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  // button
  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  const toggleInlineStype = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inlineStyle: InLineStype
  ) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const [styleButtonToggle, setStyleButtonToggle] = useState<{
    [key in InLineStype]: boolean;
  }>({ UNDERLINE: false, BOLD: false, ITALIC: false });
  useEffect(() => {
    const t = { UNDERLINE: false, BOLD: false, ITALIC: false };
    editorState.getCurrentInlineStyle().forEach((v) => {
      if (v) t[v as InLineStype] = true;
    });
    setStyleButtonToggle(t);
  }, [editorState]);
  return (
    <>
      <div className="flex justify-between">
        <div className=" text-sm font-medium">Content</div>
        <div className="flex rounded-sm shadow">
          <button
            onMouseDown={(e) => toggleInlineStype(e, "UNDERLINE")}
            className={
              " p-1 flex justify-center items-center" +
              (styleButtonToggle["UNDERLINE"]
                ? " bg-slate-400"
                : " hover:bg-slate-200 ")
            }
          >
            <BiUnderline size={16} />
          </button>
          <button
            onMouseDown={(e) => toggleInlineStype(e, "BOLD")}
            className={
              " p-1 font-bold flex justify-center items-center" +
              (styleButtonToggle["BOLD"]
                ? " bg-slate-400"
                : " hover:bg-slate-200 ")
            }
          >
            <BiBold size={16} />
          </button>
          <button
            onMouseDown={(e) => toggleInlineStype(e, "ITALIC")}
            className={
              " p-1 italic flex justify-center items-center" +
              (styleButtonToggle["ITALIC"]
                ? " bg-slate-400"
                : " hover:bg-slate-200 ")
            }
          >
            <BiItalic size={16} />
          </button>
        </div>
      </div>
      <div className=" p-1 border bg-[#F7F7F7] rounded shadow-[inset_0px_1px_10px_rgba(0,0,0,0.05)] w-full h-36 overflow-auto">
        {/* <MyEditor/> */}
        <Editor
          ref={editorRef}
          placeholder="some place holder..."
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          plugins={plugins}
        />
        <MentionSuggestions
          suggestions={suggestions}
          onSearchChange={onSearchChange}
          onAddMention={() => {
            // get the mention object selected
          }}
        />
      </div>
    </>
  );
};

export default ContentEditor;
