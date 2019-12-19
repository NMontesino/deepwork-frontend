import React, { Component } from 'react'

class NewTaskForm extends Component
{

    state = 
    {
        taskName: '',
        urgent: null,
        important: null
    }

    handleSubmit = (e) =>
    {

        e.preventDefault()

        fetch('http://localhost:3000/api/v1/tasks', 
        {
            method: "POST",
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(
            {
                name: this.state.taskName,
                urgent: this.state.urgent,
                important: this.state.important,
                user_id: this.props.user.id
            })
        })
        .then(res => res.json())
        .then((task) => 
        {
            this.props.addTask(task)
        })

    }

    handleTaskChange = (e) =>
    {
        this.setState(
        {
            taskName: e.target.value
        })
    }

    handleBooleanChange = (e) =>
    {
        if(e.target.value === "Yes")
        {
            this.setState(
            {
                [e.target.name]: true
            })
        }
        else if(e.target.value === "No")
        {
            this.setState(
            {
                [e.target.name]: false
            })
        }
    }

    render()
    {
        return(

            <div className="w-1/4 h-full flex items-center" style={{'margin-left': '16px'}}>
                <form className="w-5/6 flex flex-col justify-center items-center" onSubmit={ this.handleSubmit } >
                    <label for="task" className="mb-1" >What needs to get done?</label>
                    <input type="text" name="task" className="mb-4 shadow appearance-none border rounded-lg w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={ this.handleTaskChange } />
                    <p className="mb-1" >Is it urgent?</p>
                    <div id="urgent" className="mb-4 flex flex-row justify-center" onChange={ this.handleBooleanChange } >
                        <div style={{'width': '48px'}} className="flex flex-row justify-between items-center mr-8">
                            <p>Yes</p>
                            <input unchecked type="radio" name="urgent" value="Yes" />
                        </div>
                        <div style={{'width': '44px'}} className="flex flex-row justify-between items-center">
                            <p>No</p>
                            <input unchecked type="radio" name="urgent" value="No" />
                        </div>
                    </div>
                    <p id="important" className="mb-1" >Is it important?</p>
                    <div id="important" className="mb-6 flex flex-row justify-center" onChange={ this.handleBooleanChange } >
                        <div style={{'width': '48px'}} className="flex flex-row justify-between items-center mr-8">
                            <p>Yes</p>
                            <input unchecked type="radio" name="important" value="Yes" />
                        </div>
                        <div style={{'width': '44px'}} className="flex flex-row justify-between items-center">
                            <p>No</p>
                            <input unchecked type="radio" name="important" value="No" />
                        </div>
                    </div>
                    <input style={{'background-color': '#B892FF'}} className="shadow hover:bg-purple-400 w-1/2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Add Task" />
                </form>
            </div>

        )
    }

}

export default NewTaskForm
