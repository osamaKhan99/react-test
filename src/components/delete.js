import React, { Component } from 'react';


class Delete extends Component {

    render(){
        const { handleSubmit } = this.props


        return(
            <div>
               <button className="dlt-btn" onSubmit={handleSubmit}>
                    Delete
               </button>
            </div>
        )
    }
}
export default Delete;