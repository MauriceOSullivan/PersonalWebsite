import React from 'react'
import * as FaLib from "react-icons/fa";
import * as AiLib from "react-icons/ai";
import * as IoLib from "react-icons/io";


export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiLib.AiFillHome />, 
        cName:'nav-text'
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <IoLib.IoMdHammer />, 
        cName:'nav-text'
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaLib.FaRegEnvelope />, 
        cName:'nav-text'
    }
]

