import React, {Component} from 'react';
import Update from './update';
import Delete from './delete';
import Complete from './complete';

class List extends Component {

    render(){

        const { items, handleUpdate, handleDelete, handleComplete } = this.props

        return(
            <div className="list-container">    
                {items ? items.map((item,i)=>{
                   return (
                    <span className="task-list">
                        <p key={i}>{item.title}</p>
                        <Update onSubmit={handleUpdate} />
                        <Delete onSubmit={handleDelete} />
                        <Complete onSubmit={handleComplete} />
                    </span>
                   )
                })
                :
                null
            }
            </div>
        )
    }
}
export default List;