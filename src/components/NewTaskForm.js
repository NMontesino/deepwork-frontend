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

        fetch('http://localhost:3000/tasks', 
        {
            method: "POST",
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
                <form className="w-5/6 flex flex-col justify-center" onSubmit={ this.handleSubmit } >
                    <label for="task" className="mb-1" >What needs to get done?</label>
                    <input type="text" name="task" className="mb-4" onChange={ this.handleTaskChange } />
                    <label for="urgent" className="mb-1" >Is it urgent?</label>
                    <select required name="urgent" className="mb-4" onChange={ this.handleBooleanChange } >
                        <option disabled selected hidden>Urgent</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <label for="important" className="mb-1" >Is it important?</label>
                    <select required name="important" className="mb-6" onChange={ this.handleBooleanChange } >
                        <option disabled selected hidden>Important</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <input type="submit" value="Add Task" />
                </form>
            </div>

        )
    }

}

export default NewTaskForm
