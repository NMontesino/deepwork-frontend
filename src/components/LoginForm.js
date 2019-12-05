import React, { Component } from 'react'

class LoginForm extends Component
{

    state = 
    {
        username: '',
        password: '',
        signIn: true,
        signUp: false,
        glow: 'rgba(220, 53, 25, 0.5)'
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

    setSignIn = () =>
    {
        this.setState(
        {
            signIn: true,
            signUp: false,
            glow: 'rgba(220, 53, 25, 0.5)'
        })
    }

    setSignUp = () =>
    {
        this.setState(
        {
            signIn: false,
            signUp: true,
            glow: 'rgba(25, 53, 220, 0.5)'
        })
    }

    render()
    {
        return(

                <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" style={{'box-shadow': `0 0 8px 2px ${this.state.glow}`}}>
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
                        {
                            this.state.signIn
                            ?
                            <button className="w-full bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ this.handleSignIn } style={{'background-color': this.state.glow}}>
                                Sign In
                            </button>
                            :
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ this.handleSignUp } style={{'background-color': this.state.glow}}>
                                Sign Up
                            </button>
                        }
                    </div>
                    <div className="text-xs flex flex-row justify-between items-center mt-6">
                        {
                            this.state.signUp
                            ?
                            <span className="text-gray-500 hover:text-gray-400" onClick={ this.setSignIn }>Need to Sign In?</span>
                            :
                            (
                                this.state.signIn
                                ?
                                <span className="text-gray-500 hover:text-gray-400" onClick={ this.setSignUp }>Need to Sign Up?</span>
                                :
                                "You broke the app"
                            )
                        }
                    </div>
                </form>

        )
    }

}

export default LoginForm