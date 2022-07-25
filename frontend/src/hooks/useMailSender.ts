import React, { useEffect } from "react";
import useArticleContext from "../contexts/ArticleContext";
import useSheetContext from "../contexts/sheetContext";
import useArticleInstancing from "./ulti/useArticleInstacing";

const useMailSender = () => {
  const {
    state: { sheetHeaders, sheetRows },
  } = useSheetContext();
  const {
    state: { titleES, contentES, extraES },
  } = useArticleContext();
  useArticleInstancing({rowIndice: []})

};
export default useMailSender;
