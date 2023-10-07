///   API-KEY : 6nBcA-hJEQF2xmUWY476xwkp3-RAZQSxg72fUpLGUGM

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider, useGlobalContext } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryclient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryclient}>
      <App />
      <ReactQueryDevtools  initialIsOpen={false}/>
    </QueryClientProvider>
  </AppProvider>
);
