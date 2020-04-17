import React, {useState} from "react";
import {Link} from "@reach/router";

function Nav({navLinks, bg, hoverBg, linkColor, logo}) {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [navOpen, setNavOpen] = useState(false);
    return(

        <div >
            <nav className={"responsive-nav"} style={{background: bg }}>
                <ul style={{background: bg }} className={navOpen? 'active': ''}>
                    <figure onClick={()=> setNavOpen(!navOpen)}>
                        <img src={logo} height={"40px"} width={"40px"} alt="logo-nav-toggler"/>
                    </figure>
                    {navLinks.map((link, index) =>
                        <li
                        onMouseEnter={()=> setHoverIndex(index)}
                        onMouseLeave={()=> setHoverIndex(-1)}
                        style={{background: hoverIndex === index ? (hoverBg || '#999') : '' }}
                        >
                            <Link to={link.path} style={{color: linkColor || '#DDD'}}>
                                {link.text}
                                <i className={link.icon}/>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;