import React, {Component, MouseEvent} from 'react';

export class Button extends Component{
    handleClick(event: MouseEvent){
        event.preventDefault();
        alert(event.currentTarget.tagName);
    }
    render() {
        return <button onclick={this.handleClick}>this.props.children}
        </button>
    }
}