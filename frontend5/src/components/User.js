import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from '../actions/User'

export default class UserCompo extends Component{
    /** 컴포넌트가 DOM에 추가되기 직전 */
    UNSAFE_componentWillMount(){
        this.props.onMount(this.props.user);
    }
    /** 컴포넌트가 props 값을 전달 받았을 때 */
    componentWillReceiveProps({nextProps}){
        if(this.props.user !== nextProps.user){
            this.props.onUpdate(nextProps.user)
        }
    }
    render (){
        return (
            <div>
                <h2>User 컴포넌트</h2>
                <p>User: {this.props.user}</p>
            </div>
        );
    }
    
}
User.PropTypes = {
    user: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}
User.defaultProps = {
    /** 기본값으로 apple 에 연결*/
    user: 'apple'
}