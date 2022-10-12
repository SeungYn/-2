import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
const CounterCountainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

const mapStateToProps = (state) => ({
  number: state.counters.number,
});

//버전1
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    return dispatch(increase());
  },
  decrease: () => {
    return dispatch(decrease());
  },
});

//버전2
const mapDispatchToProps2 = (dispatch) =>
  bindActionCreators({ increase, decrease }, dispatch);

const conn = connect(mapStateToProps, mapDispatchToProps2);
console.log(conn);

export default conn(CounterCountainer);
