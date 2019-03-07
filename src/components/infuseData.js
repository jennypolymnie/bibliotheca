import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/actionCreators';
//import 

function mapStateToProps(state) {
    return {
        state1: state.state1,
        state2: state.state2
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const infuseData = connect(mapStateToProps, mapDispatchToProps);

export default infuseData;
