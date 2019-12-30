import React, { Component } from 'react'
import EisenhowerSquare from './EisenhowerSquare'

class EisenhowerMatrix extends Component
{

    render()
    {
        return(

            <div className="flex flex-col w-3/4 h-full">
                <div className="flex flex-row" style={{'height': 'calc((100% - 48px) / 2)', 'width': '100%', 'margin': '16px 0'}}>
                    <EisenhowerSquare removeTask={ this.props.removeTask } index={ this.props.index } tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (task.important && task.urgent)}) : null } name="Do It" colors={{bg: '#b5f2dd', text: '#8a36ff'}}/>
                    <EisenhowerSquare removeTask={ this.props.removeTask } tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (task.important && !task.urgent)}) : null } name="Defer It" colors={{bg: '#FBDAB3', text: '#d64737'}}/>
                </div>
                <div className="flex flex-row" style={{'height': 'calc((100% - 48px) / 2)', 'width': '100%', 'margin-bottom': '16px'}}>
                    <EisenhowerSquare removeTask={ this.props.removeTask } tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (!task.important && task.urgent)}) : null } name="Delegate It" colors={{bg: '#642115', text: '#97E6FA'}}/>
                    <EisenhowerSquare removeTask={ this.props.removeTask } tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (!task.important && !task.urgent)}) : null } name="Delete It" colors={{bg: '#782BE4', text: '#f6c699'}}/>
                </div>
            </div>

        )
    }

}

export default EisenhowerMatrix