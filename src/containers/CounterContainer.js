import React from 'react';
import { connect } from 'react-redux';
import { decreaseNumber, increaseNumber } from '../redux/counter/CounterActions';

const CounterContainer = (props) => {
    return (
        <div>
            <div style={{marginTop: '40px'}}>
                <button style={{marginRight: '40px'}} onClick={props.increaseNumber}>+</button>
                <span>The Count is - {props.initNumber} </span>
                <button style={{marginLeft: '40px'}} onClick={props.decreaseNumber}>-</button>
            </div>
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        initNumber: state.initNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseNumber: () => dispatch(increaseNumber()),
        decreaseNumber: () => dispatch(decreaseNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);