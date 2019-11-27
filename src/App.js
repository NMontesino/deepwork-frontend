import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import Timer from './components/Timer'
import TaskContainer from './components/TaskContainer'
import './styles/tailwind.css'

class App extends Component
{

  state = 
  {
    loggedIn: false,
    user: null,
    index: -1
  }

  getReturningUser = (username, password) =>
  {

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((users) => 
    {

      let currentUser = users.find((user) => 
      {
        return ((user.username === username) && (user.password === password))
      })

      if(currentUser)
      {

        fetch(`http://localhost:3000/users/${currentUser.id}`)
        .then(res => res.json())
        .then((user) => 
        {
          if(user)
          {
            this.setState(
            {
              user: user,
              loggedIn: true
            })
          }
        })

      }

    })

  }

  getNewUser = (username, password) =>
  {

    fetch('http://localhost:3000/users', 
    {
      method: "POST",
      headers: 
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
      {
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then((user) => 
    {
      if(user)
      {
        this.setState(
        {
          user: user,
          loggedIn: true
        })
      }
    })

  }

  iterate = () =>
  {
    this.setState(
    {
      index: this.state.index + 1
    })
  }

  index = () =>
  {
    return this.state.index
  }

  render()
  {
    return(

      <div className="App w-full h-full flex flex-row justify-center items-center">
      {
        this.state.loggedIn
        ?
        <>
          <Timer iterate={ () => this.iterate() } name={ this.state.user.username } />
          <TaskContainer user={ this.state.user } index={ this.index() } />
        </>
        :
        <LoginForm signin={ this.getReturningUser } signup={ this.getNewUser } />
      } 
      </div>
      
    )
  }

}

export default App
