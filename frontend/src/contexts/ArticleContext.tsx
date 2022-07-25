import { createContext, useReducer, useContext } from "react";
import { EditorState, ContentState } from "draft-js";


interface State{
    titleES: EditorState;
    contentES: EditorState;
    extraES: EditorState;
}

export type ActionKind = "SET_TITLE" | "SET_CONTEXT" | "SET_EXTRA";

interface Action {
    type: ActionKind,
    payload: { editorState: EditorState},
}


const initialState: State = {
    titleES: EditorState.createWithContent(ContentState.createFromText("sample title")),
    contentES: EditorState.createWithContent(ContentState.createFromText("sample content")),
    extraES: EditorState.createWithContent(ContentState.createFromText("sample extra"))
}

const articleReducer = (state: State, {type, payload: {editorState}}: Action): State => {
    switch (type) {
        case "SET_TITLE":
            return {...state, titleES: editorState};
        case "SET_CONTEXT":
            return {...state, contentES: editorState};
        case "SET_EXTRA":
            return  {...state, extraES: editorState};
        default:
            throw new Error(`[ArticleContext] cant handle action type: ${type}`);
            return state;
    }
}

const ArticleContext = createContext<{
    state: State,
    sender: React.Dispatch<Action>
}>({state: initialState,sender:()=>{}});


type Props = {
    children: JSX.Element,
}

export const ArticleProvider = (props: Props) => {
    const [state, sender]= useReducer(articleReducer, initialState);
    const value = {
        state, sender
    }
  return (
    <ArticleContext.Provider value={value}>{props.children}</ArticleContext.Provider>
  )
}

const useArticleContext = () => {
    const context = useContext(ArticleContext);
    if(!context){
        throw new Error("No sheet Context provider");
    }
    return context;
}

export default useArticleContext