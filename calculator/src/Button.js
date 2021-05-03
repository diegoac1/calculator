import React, {Component} from 'react';
import "./Button.scss";

class Button extends Component {
    render() {
        return (
            <div
                className="Button"
                onClick={this.props.onCLick}
                data-size={this.props.size}
                data-value={this.props.value}
            >
            {this.props.label}
            </div>
        )
    }
}

export default Button;