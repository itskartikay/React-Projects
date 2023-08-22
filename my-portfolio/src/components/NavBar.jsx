import React from "react";
import "./CSS/global.css"
import "./CSS/NavBar.css"

const NavBar = () => {
    return (
        <>
            <div className="Nav">
                <p className="options">
                    About
                </p>
                <p className="options">
                    Skills
                </p>
                <p className="options">
                    Projects
                </p>
                <p className="options">
                    Contact
                </p>
            </div>
        </>
    )

}

export default NavBar;