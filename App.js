import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter } from "react-router-dom";

const Applayout = ()=>{
    return(
        <div className="app">
           <Header/> 
        </div>
    )
}

const router = createBrowserRouter([ 
    {
        path: "/",
        element: <Applayout/>
    }
 ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)