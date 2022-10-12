import React from 'react';
import Counter from '../components/Counter';

const CounterCountainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log('increase');
  },
});

export default CounterCountainer;
