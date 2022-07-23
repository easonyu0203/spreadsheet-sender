import { createContext, useReducer, useContext } from "react";

export interface SheetRow {
    data: string[];
    picked: boolean;
    show: boolean;
  }

interface State{
    sheetHeaders: string[],
    sheetRows: SheetRow[],
    rawData: string[][],
}

export type ActionKind = "SET_SHEET" | "SET_RAW_DATA";

export type SheetPayload = {sheetHeaders: string[], sheetRows: SheetRow[]}
export type RawDataPlayload = {rawData: string[][]}

interface Action {
    type: ActionKind,
    payload: any,
}


const initialState: State = {
    sheetHeaders: [],
    sheetRows: [],
    rawData: [],
}

const sheetReducer = (state: State, {type, payload}: Action): State => {
    switch (type) {
        case "SET_SHEET":
            const {sheetHeaders, sheetRows} = payload as SheetPayload;
            return {...state, sheetHeaders, sheetRows};
        case "SET_RAW_DATA":
            const {rawData} = payload as RawDataPlayload;
            return {...state, rawData};
        default:
            throw new Error(`[sheetContext] cant handle action type: ${type}`);
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