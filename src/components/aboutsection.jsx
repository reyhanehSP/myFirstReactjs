import React from "react";
import data from "../data";
import {SocialIcon} from "react-social-icons";

class AboutSection extends React.Component {
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <h2 className="boldTitle"> {data.sections[0].items[0].type}</h2>
                    </div>
                    <div className="row aboutSection">
                        <div className="col-md-6 text-left">
                            <img src={data.sections[0].items[1].image} className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                            <h2 className="firstName">{data.sections[0].fName}</h2>
                            <h2 className="lastName">{data.sections[0].lName}</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <p className="heading">
                                        {data.sections[0].items[0].type}
                                    </p>
                                </div>
                                <div className="col-md-10">
                                    <p className="aboutText">{data.sections[0].items[0].content}</p>
                                    <div className="social-media">
                                        {
                                            Object.keys(data.links).map((key , i) =>{
                                                return(
                                                    <SocialIcon url={data.links[key]} key={i} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default AboutSection;