import React from "react";
import data from "../data";

class Services extends React.Component {
    render() {
        return (
            <div className="Services container">
                <div className="row">
                    <h2 className="boldTitle">{data.sections[1].title}</h2>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <p className="titleName">{data.sections[1].items[0].type}</p>
                        <p className="titleProps">{data.sections[1].items[0].content[0].title}</p>
                        <h3 className="FrontText">{data.sections[1].items[0].content[0].title2}</h3>

                        <div className="row">

                            <div className="col-md-2">
                                <h2 className="roteName">{data.sections[1].title}</h2>
                            </div>
                            <div className="col-md-10 SkilsFront">
                                <div className="row">
                                    <div className="col-md-6 col-xs-6">
                                        <ul className="ListSkills">
                                            <li>{data.sections[1].items[0].listSkills[0].skill1}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill2}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill3}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill4}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill5}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill6}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill7}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xs-6">
                                        <ul className="ListSkills">
                                            <li>{data.sections[1].items[0].listSkills[0].skill8}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill9}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill10}</li>
                                            <li>{data.sections[1].items[0].listSkills[0].skill11}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 services-image">
                        <img src={data.sections[1].items[0].content[0].image} className="img-fluid"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;