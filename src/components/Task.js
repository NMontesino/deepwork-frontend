import React, { Component } from 'react'

class Task extends Component
{

    render()
    {
        return(

            <div className="px-4 py-2 rounded-full" style={ this.props.active ? {'background-color': this.props.bgHighlight, 'color': this.props.textHighlight, 'font-family': 'Montserrat', 'font-weight': '600'} : {'background-color': this.props.textHighlight, 'color': this.props.bgHighlight, 'font-family': 'Montserrat', 'font-weight': '600'} }>
                { this.props.task.name }
            </div>
    
        )
    }

}

export default Task