import React from "react";
import Logo from "../logo.svg"

class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar-menu">
                            <a href="">
                                <img src={Logo}/>
                            </a>
                            <ul>
                                <li><a>About</a></li>
                                <li><a>Services</a></li>
                                <li><a>Skills</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;
