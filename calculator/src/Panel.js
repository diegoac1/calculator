import React from 'react';
import './index.css';


class Panel extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.number1 = 0;
        this.number2 = 0;
        // this.state = {
            
        // };

    }
    
    

    calculate = (number1, number2) => {
        
        console.log(number1, number2);

    }
    
    render(){
        return (
            <div className="App">
              <div class = "title">Calculator</div>
              <table border="1">
                <tr>
                  <td colspan="3"><input type="text" id="result"/></td>
                 
                  <td><input type="button" value="c" onclick="clr()"/> </td>
                </tr>
                <tr>
                  <td><input type="button" value="1" onclick="dis('1')"/> </td>
                  <td><input type="button" value="2" onclick="dis('2')"/> </td>
                  <td><input type="button" value="3" onclick="dis('3')"/> </td>
                  <td><input type="button" value="/" onclick="dis('/')"/> </td>
                </tr>
                <tr>
                  <td><input type="button" value="4" onclick="dis('4')"/> </td>
                  <td><input type="button" value="5" onclick="dis('5')"/> </td>
                  <td><input type="button" value="6" onclick="dis('6')"/> </td>
                  <td><input type="button" value="-" onclick="dis('-')"/> </td>
                </tr>
                <tr>
                  <td><input type="button" value="7" onclick="dis('7')"/> </td>
                  <td><input type="button" value="8" onclick="dis('8')"/> </td>
                  <td><input type="button" value="9" onclick="dis('9')"/> </td>
                  <td><input type="button" value="+" onclick="dis('+')"/> </td>
                </tr>
                <tr>
                  <td><input type="button" value="." onclick="dis('.')"/> </td>
                  <td><input type="button" value="0" onclick="dis('0')"/> </td>
                  <td><input type="button" value="=" onclick="solve()"/> </td>
                  <td><input type="button" value="*" onclick="dis('*')"/> </td>
                </tr>
              </table>
            </div>
          );
    }
}

export default Panel;