import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todo';

const TodosContainer = {
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
};
