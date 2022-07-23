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
import useSheetContext from "../../contexts/sheetContext";

type Props = {
  title: string;
  inlineStyleButton?: boolean;
  keyCommand?: boolean;
  className?: string;
  state: {
    editorState: EditorState,
    setEditorState:React.Dispatch<React.SetStateAction<EditorState>>,
  }
};
type InLineStype = "UNDERLINE" | "BOLD" | "ITALIC";

const TextEditor = ({
  title,
  className,
  inlineStyleButton,
  keyCommand,
  state: {editorState,setEditorState}
}: Props) => {
  const editorRef = useRef<Editor>(null);
  const {
    state: { sheetHeaders },
  } = useSheetContext();

  // mention
  const mentions = sheetHeaders.map((v) => {
    return { name: v };
  });
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

  const onSearchChange = useCallback(
    ({ value }: { value: string }) => {
      setSuggestions(defaultSuggestionsFilter(value, mentions));
    },
    [mentions]
  );

  // button
  const handleKeyCommand = (command: string) => {
    if (!keyCommand) return "not-handled";
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
        <div className=" text-sm font-medium">{title}</div>
        {inlineStyleButton && (
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
        )}
      </div>
      <div className={className}>
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

export default TextEditor;
