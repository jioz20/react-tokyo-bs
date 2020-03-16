import React, { Component } from 'react'
import './TodoItem.css';
export default class TodoItem extends Component {
    render() {
    let className="TodoItem";
    if(this.props.item.isComplete)
        className += ' TodoItem-complete';


        return (
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}
