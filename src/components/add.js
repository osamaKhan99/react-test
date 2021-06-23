import React, { Component } from 'react';

class Add extends Component {

    render(){
        const { handleSubmit } = this.props

        return(
            <div >
               <button className="add-btn" onClick={handleSubmit}>
                    Add
               </button>
            </div>
        )
    }
}
export default Add;