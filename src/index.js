import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Routing from "./components/routing";
// import Userupdate from "./components/userupdate";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Routing/>
    </StrictMode>,

);
