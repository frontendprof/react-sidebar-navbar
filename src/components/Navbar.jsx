
import React,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';
import {Link} from "react-router-dom";

import {SidebarData} from "./SidebarData";



function Navbar() {

    const [sidebar,setSidebar]=useState(false)

    const showSidebar=()=>setSidebar(!sidebar);


    return (
        <>
            <div className="navbar">
                <Link className="menu-bars" to="#">
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>

            <nav className={sidebar? "nav-menu active":'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link className="menu-bars" to="#">
                            <GrClose />
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
            
        </>
    );
}

export default Navbar;
