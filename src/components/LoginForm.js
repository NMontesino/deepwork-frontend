import React, { Component } from 'react'

class LoginForm extends Component
{

    state = 
    {
        username: '',
        password: ''
    }

    handleChange = (e) => 
    {
        this.setState(
        {
            [e.target.name]: e.target.value
        })
    }

    handleSignIn = () =>
    {
        this.props.signin(this.state.username, this.state.password)
    }

    handleSignUp = () =>
    {
        this.props.signup(this.state.username, this.state.password)
    }

    handleSubmit

    render()
    {
        return(

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username" onChange={ this.handleChange } />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="******************" onChange={ this.handleChange } />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ this.handleSignIn } >
                            Sign In
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ this.handleSignUp } >
                            Sign Up
                        </button>
                    </div>
                </form>

        )
    }

}

export default LoginForm