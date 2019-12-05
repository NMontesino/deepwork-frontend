import React, { Component } from 'react'
import TimerDone from '../sounds/service-bell_daniel_simion.wav'
import Meditation from '../sounds/Mindfulness Bell - A 5 Minute Mindfulness Meditation.wav'
import Play from '../icons/noun_Play in circle_2433769.svg'
import Pause from '../icons/noun_pause in circle_2433738.svg'
import Refresh from '../icons/noun_Refresh_2433739.svg'

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
            intervalId: intervalId,
            running: true
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
        console.log("Stop hitting")
        meditation.pause()
        clearInterval(this.state.intervalId)
        this.setState(
        {
            running: false
        })
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
                seconds: 25,
                running: false
            })
        }
        else if(this.state.break)
        {
            this.setState(
            {
                minutes: 0,
                seconds: 5,
                running: false
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

            <div className="h-full w-1/4 flex flex-col justify-around items-center px-4">
                <div className="flex flex-col justify-center items-center w-full"><span>Welcome to</span><span style={{'font-family': 'Courgette', 'font-size': '40px'}}>DeepWork</span><span>{ this.props.name }</span></div>
                <div classname="flex flex-col justify-center items-center w-full" style={{'width': '150px'}}>
                    <div className="text-2xl mb-2 text-center flex flex-row justify-around w-full pl-px" style={{'font-family': 'Courgette', 'font-size': '40px'}}><span className="w-5/12">{this.state.minutes  < 10 ? '0' + this.state.minutes : this.state.minutes}</span><span className="w-1/6">:</span><span className="w-5/12">{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}</span></div>
                    <div className="flex flex-row text-xs mb-4 justify-around w-full"><span className="mx-2" onClick={ this.setWork } style={this.state.work ? {'font-weight': 'bold', 'scale': '1.1', 'color': 'rgba(0, 0, 0, 1)'} : {'color': 'rgba(0, 0, 0, 0.2)'}}>Work</span><span className="mx-2" onClick={ this.setBreak } style={this.state.break ? {'font-weight': 'bold', 'scale': '1.1', 'color': 'rgba(0, 0, 0, 1)'} : {'color': 'rgba(0, 0, 0, 0.2)'}}>Break</span></div>
                    <div className="flex flex-col w-full items-center justify-around">{ this.state.running ? <img height="50px" width="50px" src={ Pause } onClick={ this.stopTimer }></img> : <img height="50px" width="50px" src={ Play } onClick={ this.startTimer }></img> }<img height="50px" width="50px" src={ Refresh } onClick={ this.resetTimer }></img></div>
                </div>
                <div className="w-full flex justify-center"><button style={{'background-color': '#EF7A85'}} className="py-2 px-4 rounded font-bold text-white" onClick={ this.props.logout }>Logout</button></div>
            </div>

        )
    }
}

export default Timer