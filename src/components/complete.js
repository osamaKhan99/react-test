import React, { Component } from 'react';


class Complete extends Component {

    render(){
        const { handleSubmit } = this.props


        return(
            <div>
               <button className="cmp-btn" onSubmit={handleSubmit}>
                    Complete
               </button>
            </div>
        )
    }
}
export default Complete;