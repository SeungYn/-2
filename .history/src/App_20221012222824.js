import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

import CounterContainer from './containers/CounterCountainer';
function App() {
  return (
    <div className='App'>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
