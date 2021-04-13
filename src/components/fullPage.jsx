import React from "react";

class fullPage extends React.Component{

    render() {
        const {children} = this.props;
        return (
            <div className={`fullPage ${this.props.className ? this.props.className : "" }`}>
                {children}
            </div>
        );
    }
}
export default  fullPage