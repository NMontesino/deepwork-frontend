import React, { Component } from 'react'
import EisenhowerMatrix from './EisenhowerMatrix'
import NewTaskForm from './NewTaskForm'

class TaskContainer extends Component
{

    state = 
    {
        tasks: this.props.user.tasks
    }

    addTask = (task) => 
    {
        console.log(this.state.tasks)
        console.log(task)
        if(this.state.tasks)
        {
            this.setState(
            {
                tasks: [...this.state.tasks, task]
            })
        }
        else
        {
            this.setState(
            {
                tasks: [task]
            })
        }
    }

    render()
    {
        return(

            <div className="flex flex-row h-full w-3/4 justify-center items-center">
                <EisenhowerMatrix tasks={ this.state.tasks } index={ this.props.index } />
                <NewTaskForm addTask={ this.addTask } user={ this.props.user } />
            </div>

        )
    }
}

export default TaskContainer