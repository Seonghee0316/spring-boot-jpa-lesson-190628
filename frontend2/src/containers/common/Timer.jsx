import React, {Component} from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state = {
            seconds : 0
        }

    }

    tick(){
        // this.setState(state=()=>{return({})});
        this.setState(state=>({
            seconds: state.seconds + 1
        }));
         
    }

    // 어떤 시점에서 작동하니가 후크 시작하자마자 작동하게 하는 메소드
    componentDidMount(){
        this.interval = setInterval(()=>this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}

export default Timer;