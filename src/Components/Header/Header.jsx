import React, {useState} from 'react';
import "./Header.css";

//Components;
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const [links, setLinks] = useState([
        {
            _id:Math.random().toString(),
            title:"DashBoard",
            link:"/",
        },
        {
            _id:Math.random().toString(),
            title:"About",
            link:"/about",
        },
        {
            _id:Math.random().toString(),
            title:"Contact",
            link:"/contact",
        },
    ])
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="err" />
          <p>STONKS</p>
        </div>
      </Link>
      <div className="header-options">
          {links?.map(({_id, title, link})=>(
              <Link to = {link}>
                  <p className = {`${location.pathname === link && 'active'}`} >{title}</p>
              </Link>
          ))}
      </div>
    </div>
  );
}
