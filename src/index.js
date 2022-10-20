import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Rote from "./components/app";


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Rote/>

        {/*<RouterProvider router={router}/>*/}
    </StrictMode>,

);
