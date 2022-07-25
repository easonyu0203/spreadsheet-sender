import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ArticleProvider } from "./contexts/ArticleContext";
import { SheetProvider } from "./contexts/sheetContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SheetProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </SheetProvider>
  </React.StrictMode>
);
