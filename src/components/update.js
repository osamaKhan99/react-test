import React, { Component } from 'react';


class Update extends Component {

    render(){
        const { handleSubmit } = this.props


        return(
            <div>
               <button className="up-btn" onSubmit={handleSubmit}>
                    Update
               </button>
            </div>
        )
    }
}
export default Update;