import React from "react";
import data from "../data";

class Work extends React.Component{
    render(){
        return(
            <div className="container workSection">
                <div className="row">
                    <h2 className="boldTitle opacityWork"> {data.sections[2].title}</h2>
                </div>
                <div>
                    <p className="titleWork">{data.sections[2].items[0].type}</p>
                </div>
                <div>
                    <p className="titlePropsWork">{data.sections[2].items[0].content}</p>
                </div>
                <div className="row">
                    <div className="ListWork">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="monthAll text-left">{data.sections[2].items[0].listWork[0].month}</p>
                                <p className="yearWorks">
                                    <span>{data.sections[2].items[0].listWork[0].sDate}</span> -
                                    <span className="colorSpan">{data.sections[2].items[0].listWork[0].eDate}</span>
                                </p>
                                <hr className="hrNow" />
                                <p className="WorkName companyName text-right">
                                    {data.sections[2].items[0].listWork[0].companyName}</p>
                                {/*<p className="WorkName SizeFont text-right"></p>*/}
                            </div>
                            <div className="col-md-9 ColorList ">
                                <h3 className="TitleColorCol">Front End Developer</h3>
                                <p
                                className="TitleColorDes">Iran Drilling congress as one of the most important events in the
                                field of energy and the largest event of Iranian upstream industry each year attracts more
                                than 1200 local and foreign participants from more than 100 companies, government officials,
                                national and international companies (NOCs &amp; IOCs), oil and gas industry managers and
                                decision makers of private companies. This year, at the same time with the congress, we will
                                celebrate the tenth anniversary of Iran Drilling Congresses with the participation of senior
                                officials of the Ministry of Petroleum, the leaders and managers of Iran oil and gas
                                industry....</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <p className="monthAll text-left">{data.sections[2].items[0].listWork[1].month}</p>
                                <p className="yearWorks">
                                    <span>{data.sections[2].items[0].listWork[0].sDate}</span> -
                                    <span className="colorSpan">{data.sections[2].items[0].listWork[1].eDate}</span>
                                </p>
                                <hr className="hrNow" />
                                <p className="WorkName companyName text-right">
                                    {data.sections[2].items[0].listWork[1].companyName}</p>
                                {/*<p className="WorkName SizeFont text-right"></p>*/}
                            </div>
                            <div className="col-md-9 ColorList ">
                                <h3 className="TitleColorCol">Front End Developer</h3>
                                <p
                                    className="TitleColorDes">Iran Drilling congress as one of the most important events in the
                                    field of energy and the largest event of Iranian upstream industry each year attracts more
                                    than 1200 local and foreign participants from more than 100 companies, government officials,
                                    national and international companies (NOCs &amp; IOCs), oil and gas industry managers and
                                    decision makers of private companies. This year, at the same time with the congress, we will
                                    celebrate the tenth anniversary of Iran Drilling Congresses with the participation of senior
                                    officials of the Ministry of Petroleum, the leaders and managers of Iran oil and gas
                                    industry....</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <p className="monthAll text-left">{data.sections[2].items[0].listWork[2].month}</p>
                                <p className="yearWorks">
                                    <span>{data.sections[2].items[0].listWork[0].sDate}</span> -
                                    <span className="colorSpan">{data.sections[2].items[0].listWork[2].eDate}</span>
                                </p>
                                <hr className="hrNow" />
                                <p className="WorkName companyName text-right">
                                    {data.sections[2].items[0].listWork[2].companyName}</p>
                                {/*<p className="WorkName SizeFont text-right"></p>*/}
                            </div>
                            <div className="col-md-9 ColorList ">
                                <h3 className="TitleColorCol">Front End Developer</h3>
                                <p
                                    className="TitleColorDes">Iran Drilling congress as one of the most important events in the
                                    field of energy and the largest event of Iranian upstream industry each year attracts more
                                    than 1200 local and foreign participants from more than 100 companies, government officials,
                                    national and international companies (NOCs &amp; IOCs), oil and gas industry managers and
                                    decision makers of private companies. This year, at the same time with the congress, we will
                                    celebrate the tenth anniversary of Iran Drilling Congresses with the participation of senior
                                    officials of the Ministry of Petroleum, the leaders and managers of Iran oil and gas
                                    industry....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Work