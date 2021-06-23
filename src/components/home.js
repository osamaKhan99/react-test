import React, { Component } from 'react';
import Add from './add';
import Input from './input';
import List from './list';


class Home extends Component {
    constructor(props){
        super(props)
            this.state = {
                items : [],
                input: '',
                edit: false,
            }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const newItem = {
            title: this.state.input,
            completed: false
        }

        const UpdatedItem = [...this.state.items, newItem]

        this.setState({
            items: UpdatedItem,
            input: ''
        })
        console.log(this.state.items)
    }


    handleDelete = () => {
        this.setState({
            item: ''
        })
    }


    handleUpdate = (e) => {
       const newInput = window.prompt("Update Task")
        if(newInput === this.state.input){
            this.setState({
                items: newInput
            })
        }
    }


    handleComplete = () => {
        this.state.input.strike()
    }


    render(){
        return(
            <div>
               <div className="header">TODO APP</div>
               <Input
                handleChange={this.handleChange}
                value={this.state.input}
               />
               <Add
                handleSubmit={this.handleSubmit}
               />
               <List
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleComplete={this.handleComplete}
                handleUpdate={this.handleUpdate}
               />
            </div>
        )
    }
}
export default Home;