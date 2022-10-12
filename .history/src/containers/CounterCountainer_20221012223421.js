import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterCountainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

const mapStateToProps = (state) => ({
  number: state.counters.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    console.log('decrease');
  },
});

const conn = connect(mapStateToProps, mapDispatchToProps);
console.log(conn);

export default conn(CounterCountainer);
