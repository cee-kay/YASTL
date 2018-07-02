import * as actions from "./index";

describe("Task actions", () => {
  it("addTask should create an ADD_TASK action", () => {
    expect(actions.addTask("I'm a very important task")).toEqual({
      type: "ADD_TASK",
      id: 0,
      description: "I'm a very important task"
    });
  });

  it("addTask should increment the id", () => {
    expect(actions.addTask("I'm a very important task").id).toEqual(1);
  });

  it("updateTask should create an UPDATE_TASK action", () => {
    expect(actions.updateTask(1, "New description")).toEqual({
      type: "UPDATE_TASK",
      id: 1,
      description: "New description"
    });
  });

  it("removeTask should create an REMOVE_TASK action", () => {
    expect(actions.removeTask(1)).toEqual({
      type: "REMOVE_TASK",
      id: 1
    });
  });

  it("toggleEditor should create an TOGGLE_EDITMODE action", () => {
    expect(actions.toggleEditor(1)).toEqual({
      type: "TOGGLE_EDITMODE",
      id: 1
    });
  });

});
