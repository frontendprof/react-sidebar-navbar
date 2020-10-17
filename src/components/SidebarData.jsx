
import React from 'react';
import { FaCartPlus,FaRegEnvelopeOpen } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { IoIosPaper,IoMdPeople,IoMdHelpCircle } from "react-icons/io";

export  const SidebarData=[

    {
        title:"Home",
        path:"/",
        icon:<AiTwotoneHome />,
        cName:"nav-text"
    },

    {
        title:"Reports",
        path:"/reports",
        icon:<IoIosPaper />,
        cName:"nav-text"
    },

    {
        title:"Products",
        path:"/products",
        icon:<FaCartPlus />,
        cName:"nav-text"
    },

    {
        title:"Team",
        path:"/team",
        icon:<IoMdPeople />,
        cName:"nav-text"
    },

    {
        title:"Messages",
        path:"/messages",
        icon:<FaRegEnvelopeOpen />,
        cName:"nav-text"
    },

    {
        title:"Support",
        path:"/support",
        icon:<IoMdHelpCircle />,
        cName:"nav-text"
    },
]