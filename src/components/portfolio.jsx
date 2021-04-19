import React from "react";
import data from "../data";
import {Tabs, Tab, Panel, useTabState, usePanelState} from '@bumaga/tabs'


class PortFolio extends React.Component {
    render() {
        // const Tab = ({ children }) => {
        //     const { onClick } = useTabState();
        //
        //     return <button onClick={onClick}>{children}</button>;
        // };
        //
        // const Panel = ({ children }) => {
        //     const isActive = usePanelState();
        //
        //     return isActive ? <p className="active">{children}</p> : null;
        // };
        return (
            <div className="container portFolioSection">
                <div className="row">
                    <h2 className="boldTitle opacityWork"> {data.sections[3].title}</h2>
                </div>
                <div>
                    <p className="titleWork">{data.sections[3].items[0].type}</p>
                </div>
                <div>
                    <p className="titlePropsWork">{data.sections[3].items[0].content}</p>
                </div>
                <Tabs>
                    <div className="tab-nav">
                        <Tab>
                            <button className="tab-button">All</button>
                        </Tab>
                        <Tab>
                            <button className="tab-button">Web Design</button>
                        </Tab>
                    </div>
                    <Panel>
                        <div className="col-md-4">
                            <a rel="noopener noreferrer" target="_blank"
                               href="http://barangfood.com/">
                                <div className="cardPro">
                                    <img alt="بارنگ فود" src="/static/media/barang.4ccd2860.png"/>
                                </div>
                            </a>
                        </div>
                    </Panel>
                    <Panel>
                        <div className="col-md-4">
                            <a rel="noopener noreferrer" target="_blank"
                               href="http://barangfood.com/">
                                <div className="cardPro">
                                    <img alt="بارنگ فود" src="/static/media/barang.4ccd2860.png"/>
                                </div>
                            </a>
                        </div>
                    </Panel>
                </Tabs>
            </div>

        );
    }
}

export default PortFolio