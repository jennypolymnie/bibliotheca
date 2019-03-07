import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/actionCreators';
import App from './App';

function mapStateToProps(state) {
    return {
        users: state.users,
        AmplificationAutosomChemistry: state.AmplificationAutosomChemistry,
        AmplificationYChemistry: state.AmplificationYChemistry,
        BloodTest: state.BloodTest,
        ExtractionChemistry: state.ExtractionChemistry,
        QuantificationChemistry: state.QuantificationChemistry,
        SalivaTest: state.SalivaTest,
        SpermTest: state.SpermTest
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const infuseData = connect(mapStateToProps, mapDispatchToProps)(App);

export default infuseData;
