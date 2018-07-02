let nextTaskID = 0;

export const addTask = description => ({
  type: "ADD_TASK",
  id: nextTaskID++,
  description: description
});

export const updateTask = (id, updatedDescription) => ({
  type: "UPDATE_TASK",
  id: id,
  description: updatedDescription
});

export const removeTask = id => ({ type: "REMOVE_TASK", id: id });

export const toggleEditor = id => ({ type: "TOGGLE_EDITMODE", id: id });

export const clearAll = () => ({ type: "CLEAR_ALL" });
