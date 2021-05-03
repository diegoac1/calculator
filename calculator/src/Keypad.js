import React, {Component} from 'react';
import "./Keypad.scss";

class Keypad extends Component {
    render() {
        return(
            <div className="Keypad">
                {/*Estamos usando composição, ao invés de herança*/}
                {this.props.children}
                
            </div>
        )
    }
}

export default Keypad;