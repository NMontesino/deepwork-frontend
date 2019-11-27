import React, { Component } from 'react'
import TimerDone from '../sounds/service-bell_daniel_simion.wav'
import Meditation from '../sounds/Mindfulness Bell - A 5 Minute Mindfulness Meditation.wav'

let meditation = new Audio(Meditation)

class Timer extends Component
{
    state =
    {
        minutes: null,
        seconds: null,
        running: false,
        work: true,
        break: false,
        intervalId: null
    }

    componentDidMount()
    {
        this.resetTimer()
    }

    startTimer = () =>
    {
        let intervalId = setInterval(this.runTimer, 1000)
        if(this.state.break)
        {
            meditation.play()
        }
        this.setState(
        { 
            intervalId: intervalId
        })
    }

    setWork = () =>
    {
        this.setState(
        {
            work: true,
            break: false
        }, () => this.resetTimer())
    }

    setBreak = () =>
    {
        this.setState(
        {
            work: false,
            break: true
        }, () => this.resetTimer())
    }

    runTimer = () =>
    { 
        this.setState(
        {
            minutes: (this.state.minutes > 0 && this.state.seconds === 0) ?  this.state.minutes - 1 : this.state.minutes,
            seconds: (this.state.minutes >= 0 && this.state.seconds === 0) ? (this.state.minutes === 0 ? 0 : this.state.seconds + 59) : this.state.seconds - 1
        }, (this.state.minutes === 0 && this.state.seconds === 0) ? () => this.switchFocus() : null)
    }

    stopTimer = () => 
    {
        meditation.pause()
        clearInterval(this.state.intervalId)
    }

    resetTimer = () =>
    {
        this.stopTimer()
        meditation.currentTime = 0
        if(this.state.work)
        {
            this.props.iterate()
            this.setState(
            {
                minutes: 0,
                seconds: 25
            })
        }
        else if(this.state.break)
        {
            this.setState(
            {
                minutes: 0,
                seconds: 5
            })
        }
    }

    autoplayTimer = () =>
    {
        this.resetTimer()
        this.startTimer()
    }

    switchFocus = () =>
    {
        let audio = new Audio(TimerDone)
        audio.play()
        this.setState(
        {
            work: !this.state.work,
            break: !this.state.break
        }, () => this.autoplayTimer())
    }

    render()
    {
        return(

            <div className="h-full w-1/6 flex flex-col justify-around items-center">
                <div className="flex flex-col justify-center items-center"><span>Welcome to</span><span style={{'font-family': 'Courgette', 'font-size': '40px'}}>DeepWork</span><span>{ this.props.name }</span></div>
                <div classname="flex flex-col justify-center items-center">
                    <div className="text-2xl mb-2 text-center w-full" style={{'font-family': 'Courgette', 'font-size': '40px'}}>{ `${this.state.minutes} : ${this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}` }</div>
                    <div className="flex flex-row text-xs mb-4 justify-around w-full"><span className="mx-2" onClick={ this.setWork } style={this.state.work ? {'font-weight': 'bold', 'scale': '1.1', 'color': 'rgba(0, 0, 0, 1)'} : {'color': 'rgba(0, 0, 0, 0.2)'}}>Work</span><span className="mx-2" onClick={ this.setBreak } style={this.state.break ? {'font-weight': 'bold', 'scale': '1.1', 'color': 'rgba(0, 0, 0, 1)'} : {'color': 'rgba(0, 0, 0, 0.2)'}}>Break</span></div>
                    <div className="flex flex-col w-full items-center justify-around"><button onClick={ this.startTimer }>Start</button><button onClick={ this.stopTimer }>Stop</button><button onClick={ this.resetTimer }>Reset</button></div>
                </div>
                <div><button>Logout</button></div>
            </div>

        )
    }
}

export default Timer