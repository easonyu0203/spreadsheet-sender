import React, { useEffect } from "react";
import { stateToHTML } from "draft-js-export-html";
import { EditorState } from "draft-js";
import useArticleContext from "../../contexts/ArticleContext";
import useSheetContext, { SheetRow } from "../../contexts/sheetContext";

type Props = {
  rowIndice?: number[];
  template?: boolean;
};

type _Props = {
  sheetHeaders: string[];
  sheetRows: SheetRow[];
  titleES: EditorState;
  contentES: EditorState;
  extraES: EditorState;
  rowIndex?: number;
  template?: boolean;
};

const articleInstancing = ({
  sheetHeaders,
  sheetRows,
  titleES,
  contentES,
  extraES,
  rowIndex,
  template,
}: _Props) => {

  let titleHTML = stateToHTML(titleES.getCurrentContent());
  let contentHTML = stateToHTML(contentES.getCurrentContent());
  let extraHTML = stateToHTML(extraES.getCurrentContent());

  if (template) return { titleHTML, contentHTML, extraHTML };
  if (rowIndex === undefined)
    throw new Error("need specify row index for article instancing");
  const row = sheetRows[rowIndex];
  sheetHeaders.forEach((header, i) => {
    const searchWord = `[${header}]`;
    titleHTML = titleHTML.replaceAll(searchWord, row.data[i]);
  });
  sheetHeaders.forEach((header, i) => {
    const searchWord = `[${header}]`;
    contentHTML = contentHTML.replaceAll(searchWord, row.data[i]);
  });
  sheetHeaders.forEach((header, i) => {
    const searchWord = `[${header}]`;
    extraHTML = extraHTML.replaceAll(searchWord, row.data[i]);
  });
  return { titleHTML, contentHTML, extraHTML };
};

const useArticleInstancing = ({ template, rowIndice }: Props):{titleHTML: string;
  contentHTML: string;
  extraHTML: string;}[] => {
  const {
    state: { sheetHeaders, sheetRows },
  } = useSheetContext();
  const {
    state: { titleES, contentES, extraES },
  } = useArticleContext();
  if(template) return [articleInstancing({sheetHeaders, sheetRows, titleES,  contentES,  extraES, template})]
  const _out:{
    titleHTML: string;
    contentHTML: string;
    extraHTML: string;
}[] = []
  if(rowIndice === undefined){
    throw new Error("need to give row indice for article instancing");
  }
  rowIndice.forEach(rowIndex=>{
    _out.push(articleInstancing({sheetHeaders, sheetRows, titleES,  contentES,  extraES, template,  rowIndex}))
  })

  return _out;
};
export default useArticleInstancing;
