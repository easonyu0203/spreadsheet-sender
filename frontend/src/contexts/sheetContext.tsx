import { createContext, useReducer, useContext } from "react";

interface State{
    sheetData: string[][],
    filteredsheetData: string[][],
}

type ActionKind ="SET_SHEET" | "SET_FILTERED_SHEET";


interface Action {
    type: ActionKind,
    payload: string[][],
}

const initialState: State = {
    sheetData: [],
    filteredsheetData: [],
}

const sheetReducer = (state: State, {type, payload}: Action): State => {
    switch (type) {
        case "SET_SHEET":
            return {...state, sheetData: payload};
        case "SET_FILTERED_SHEET":
            return{...state, filteredsheetData: payload};
        default:
            return state;
    }
}

const SheetContext = createContext<{
    state: State,
    sender: React.Dispatch<Action>
}>({state: initialState,sender:()=>{}});


type Props = {
    children: JSX.Element,
}

export const SheetProvider = (props: Props) => {
    const [state, sender]= useReducer(sheetReducer, initialState);
    const value = {
        state, sender
    }
  return (
    <SheetContext.Provider value={value}>{props.children}</SheetContext.Provider>
  )
}

const useSheetContext = () => {
    const context = useContext(SheetContext);
    if(!context){
        throw new Error("No sheet Context provider");
    }
    return context;
}

export default useSheetContext