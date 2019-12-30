import React, { Component } from 'react'
import Delete from '../icons/noun_edit_230514.svg'
import Edit from '../icons/noun_bin_2956146.svg'

class Task extends Component
{

    render()
    {
        return(

            <div className="px-4 py-2 rounded-full flex flex-row align-center justify-between" style={ this.props.active ? {'background-color': this.props.bgHighlight, 'color': this.props.textHighlight, 'font-family': 'Montserrat', 'font-weight': '600'} : {'background-color': this.props.textHighlight, 'color': this.props.bgHighlight, 'font-family': 'Montserrat', 'font-weight': '600'} }>
                <div>{ this.props.task.name }</div>
                <div>
                    <img height="20px" width="20px" src={ Edit }></img>
                    <img height="20px" width="20px" src={ Delete }></img>
                </div>
            </div>
    
        )
    }

}

export default Task