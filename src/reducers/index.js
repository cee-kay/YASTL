const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: action.id, description: action.description, isInEditMode: false }
      ];
    case "UPDATE_TASK":
      return state.map(task => {
        if (task.id === action.id) {
          task.description = action.description;
          task.isInEditMode = false;
        }
        return task;
      });
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.id);
    case "TOGGLE_EDITMODE":
      return state.map(task => {
        if (task.id === action.id) {
          task.isInEditMode = !task.isInEditMode;
        } else {
          task.isInEditMode = false;
        }
        return task;
      });
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};
