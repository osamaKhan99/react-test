import React, { Component } from 'react';

class Input extends Component {

    render(){
        const { input, handleChange } = this.props


        return(
            <div>
                <input 
                 type="text" 
                 className="textarea"
                 placeholder="Enter Task..."
                 value={input}
                 onChange={handleChange}
                 />
            </div>
        )
    }
}
export default Input;