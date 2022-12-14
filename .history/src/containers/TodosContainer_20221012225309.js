import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todo';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    ></Todos>
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  { changeInput, insert, toggle, remove }
)(TodosContainer);
