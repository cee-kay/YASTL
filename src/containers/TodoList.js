import { connect } from "react-redux";

import { updateTask, removeTask, toggleEditor, clearAll } from "../actions";
import TodoList from "../components/TodoList";

const getAllTasks = state => {
  return {
    tasks: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: (id, updatedDescription) =>
      dispatch(updateTask(id, updatedDescription)),
    removeTask: id => dispatch(removeTask(id)),
    toggleEditor: id => dispatch(toggleEditor(id)),
    clearAll: id => dispatch(clearAll())
  };
};

export default connect(getAllTasks, mapDispatchToProps)(TodoList);
