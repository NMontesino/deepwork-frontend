import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import Timer from './components/Timer'
import TaskContainer from './components/TaskContainer'
import './styles/tailwind.css'

class App extends Component
{

  state = 
  {
    isLoggedIn: false,
    user: null,
    index: -1
  }

  autoLogin = () =>
  {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token)
    {
      fetch('http://localhost:3000/api/v1/users/auto_login', 
      {
        method: "GET",
        headers: 
        {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then((user) => 
      {
        console.log(user)
        this.setState(
        {
          user: user
        }, 
        () => 
        {
          this.setState(
          {
            isLoggedIn: true
          })
        })
      })
    }
  }

  componentDidMount()
  {
    this.autoLogin()
  }

  getReturningUser = (username, password) =>
  {

    fetch('http://localhost:3000/api/v1/users/login',
    {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
      {
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then((payload) => 
    {
      console.log(payload.user)
      if(!payload.error)
      {
        localStorage.setItem("token", payload.token)
        this.setState(
        {
          user: payload.user,
          isLoggedIn: true
        })
      }

    })

  }

  getNewUser = (username, password) =>
  {

    fetch('http://localhost:3000/api/v1/users', 
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
    .then((payload) => 
    {
      if(payload.user)
      {
        localStorage.token = payload.token
        this.setState(
        {
          user: payload.user
        },
        () => 
        {
          this.setState(
          {
            isLoggedIn: true
          })
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

  logout = () =>
  {
    localStorage.clear()
    this.setState(
    {
      isLoggedIn: false,
      user: null,
      index: -1
    })
  }

  render()
  {
    console.log(this.state.user)
    return(

      <div className="App w-full h-full flex flex-row justify-center items-center bg-gray-100">
      {
        this.state.isLoggedIn
        ?
        <>
          <Timer iterate={ () => this.iterate() } name={ this.state.user.username } logout={ this.logout } />
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
