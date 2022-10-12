import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

import CounterContainer from './containers/CounterCountainer';
function App() {
  return (
    <div className='App'>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
