import React from "react";
import { Link } from "react-router-dom";
import index from "../../index";

 const Header = (props) => {

    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav sign">
                        <li className="sign"><Link to ={"/"}>Login Page</Link></li>
                        <li className="sign"><Link to ={"/signup"}>Signin Page</Link></li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Header;
