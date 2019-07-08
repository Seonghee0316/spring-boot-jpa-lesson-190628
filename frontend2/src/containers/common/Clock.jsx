import React, {Component} from 'react'
import ClockDisplay from '../../components/ClockDisplay.jsx'
import ClockDigital from '../../components/ClockDigital.jsx'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {};
        this.launchClock();
    }

    render(){
        return(
            <div>
                <ClockDisplay time={this.state.currentTime}/>
                <ClockDigital time={this.state.currentTime}/>
            </div>
        );
    }

    // 현재 시각 가져오는 것
    launchClock(){
        setInterval(()=>{
            this.setState({currentTime: new Date().toLocaleString('en')})
        }, 1000);
    }
}

export default Clock;