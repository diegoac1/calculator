import React, {Component} from 'react';
import "./Display.scss";

class Display extends Component {
    render() {
        return (
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;