import React, { Component } from "react";

class Test extends Component {
    componentDidMount() {
        this.props.mountCallback();
    }

    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export default Test;
