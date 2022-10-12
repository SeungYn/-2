import React from 'react';
import Counter from '../components/Counter';

const CounterCountainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

export default CounterCountainer;
