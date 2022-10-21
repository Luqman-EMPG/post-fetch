import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./Napp";
import Useredit from "./useredit";
import Fetching from "./fetch";
export default function Rote(){

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Fetching/>}/>
                <Route exact path="/user" element={<App/>}/>
                <Route exact path="/user/:id" element={<Useredit/>}/>
            </Routes>
        </Router>

    )
}
