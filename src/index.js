import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
 import App from "./app"
//import App from "./newapp"
// import Useredit from "./components/useredit";


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App/>
        {/*<RouterProvider router={router}/>*/}
    </StrictMode>,

);
