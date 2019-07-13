import User from '../components/User';
import { connect } from 'react-redux';
import * as actions from '../actions/User'

/* 리듀서를 정의한 후에 구현할 예정 */
const mapStateToProps = (state, ownProps)=>({
    user: ownProps.user
})

const mapDispatchToProps = dispatch =>({
    onMount (user){
        dispatch(actions.fetchUser(user))
    },
    onUpdate (user){
        dispatch(actions.fetchUser(user))
    }
})


export default connect(mapStateToProps, mapDispatchToProps) (User);