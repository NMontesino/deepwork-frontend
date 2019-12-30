import React, { Component } from 'react'
import Edit from '../icons/noun_edit_230514.svg'
import Delete from '../icons/noun_bin_2956146.svg'

class Task extends Component
{

    render()
    {
        return(

            <div className="px-4 py-2 rounded-full flex flex-row align-center justify-between" style={ this.props.active ? {'background-color': this.props.bgHighlight, 'color': this.props.textHighlight, 'font-family': 'Montserrat', 'font-weight': '600'} : {'background-color': this.props.textHighlight, 'color': this.props.bgHighlight, 'font-family': 'Montserrat', 'font-weight': '600'} }>
                <div>{ this.props.task.name }</div>
                <div className="flex flex-row justify-between" style={{'width': '45px'}}>
                    <img height="17px" width="17px" src={ Edit }></img>
                    <img height="15px" width="15px" src={ Delete }></img>
                </div>
            </div>
    
        )
    }

}

export default Task