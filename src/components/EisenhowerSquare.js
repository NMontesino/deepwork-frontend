import React, { Component } from 'react'
import Task from './Task'

class EisenhowerSquare extends Component
{

    adjustIndex = () =>
    {
        return (this.props.index > this.props.tasks.length - 1) ? this.props.index % this.props.tasks.length : this.props.index
    }

    render()
    {

        let tasks = this.props.tasks ? this.props.tasks.map((task, index) => {return <Task task={ task } bgHighlight={ this.props.colors.text } textHighlight={ this.props.colors.bg } active={ index === this.adjustIndex() } />}) : null

        return(

            <div className="rounded-lg shadow p-6" style={{'height': '100%', 'width': 'calc((100% - 48px)/2)', 'margin-left': '16px', 'background-color': this.props.colors.bg, 'color': this.props.colors.text}}>
                <div className="w-full text-center text-2xl my-4" style={{'font-family': 'Montserrat', 'font-weight': '900'}}>{ this.props.name }</div>
                <div className="w-full p-4" style={{'height': '70%','overflow': 'scroll'}}>
                    { tasks }
                </div>
            </div>

        )

    }

}

export default EisenhowerSquare