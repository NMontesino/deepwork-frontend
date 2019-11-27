import React, { Component } from 'react'
import EisenhowerSquare from './EisenhowerSquare'

class EisenhowerMatrix extends Component
{

    render()
    {
        return(

            <div className="flex flex-col w-3/4 h-full">
                <div className="flex flex-row" style={{'height': 'calc((100% - 48px) / 2)', 'width': '100%', 'margin': '16px 0'}}>
                    <EisenhowerSquare index={ this.props.index } tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (task.important && task.urgent)}) : null } name="Urgent | Important" colors={{bg: '#e34250', text: '#a2f3eb'}}/>
                    <EisenhowerSquare tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (task.important && !task.urgent)}) : null } name="Not Urgent | Important" colors={{bg: '#7325f9', text: '#ccfeb7'}}/>
                </div>
                <div className="flex flex-row" style={{'height': 'calc((100% - 48px) / 2)', 'width': '100%', 'margin-bottom': '16px'}}>
                    <EisenhowerSquare tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (!task.important && task.urgent)}) : null } name="Urgent | Not Important" colors={{bg: '#fbe8a7', text: '#730950'}}/>
                    <EisenhowerSquare tasks={ this.props.tasks ? this.props.tasks.filter((task) => {return (!task.important && !task.urgent)}) : null } name="Not Urgent | Not Important" colors={{bg: '#51fcda', text: '#5e1e5a'}}/>
                </div>
            </div>

        )
    }

}

export default EisenhowerMatrix