import tasks from "./index";

describe("tasks reducer", () => {
  it("should have an empty initial state", () => {
    expect(tasks(undefined, {})).toEqual([]);
  });

  it("should have an ADD_TASK action", () => {
    expect(
      tasks([], {
        type: "ADD_TASK",
        id: 0,
        description: "New Task"
      })
    ).toEqual([{ description: "New Task", id: 0, isInEditMode: false }]);
  });

  it("should handle multiple actions of ADD_TASK", () => {
    expect(
      tasks([], { type: "ADD_TASK", description: "New Task 0", id: 0 })
    ).toEqual([
      {
        description: "New Task 0",
        id: 0,
        isInEditMode: false
      }
    ]);

    expect(
      tasks(
        [
          {
            description: "New Task 0",
            id: 0,
            isInEditMode: false
          }
        ],
        { type: "ADD_TASK", description: "New Task 1", id: 1 }
      )
    ).toEqual([
      {
        description: "New Task 0",
        id: 0,
        isInEditMode: false
      },
      {
        description: "New Task 1",
        id: 1,
        isInEditMode: false
      }
    ]);
  });

  it("should have an UPDATE_TASK action", () => {
    expect(
      tasks([{ description: "New Task", id: 0, isInEditMode: false }], {
        type: "UPDATE_TASK",
        id: 0,
        description: "Updated Description"
      })
    ).toEqual([
      { description: "Updated Description", id: 0, isInEditMode: false }
    ]);
  });

  it("should handle REMOVE_TASK", () => {
    const state = [
      { description: "New Task 0", id: 0, isInEditMode: false },
      { description: "New Task 1", id: 1, isInEditMode: false },
      { description: "New Task 2", id: 2, isInEditMode: false }
    ];

    expect(tasks(state, { type: "REMOVE_TASK", id: 1 })).toEqual([
      { description: "New Task 0", id: 0, isInEditMode: false },
      { description: "New Task 2", id: 2, isInEditMode: false }
    ]);
  });

  it("should handle TOGGLE_EDITMODE", () => {
    expect(
      tasks([{ description: "New Task", id: 0, isInEditMode: false }], {
        type: "TOGGLE_EDITMODE",
        id: 0
      })
    ).toEqual([{ description: "New Task", id: 0, isInEditMode: true }]);

    expect(
      tasks([{ description: "New Task", id: 0, isInEditMode: true }], {
        type: "TOGGLE_EDITMODE",
        id: 0
      })
    ).toEqual([{ description: "New Task", id: 0, isInEditMode: false }]);
  });

  it("should allow only one item to be edited at once", () => {
    expect(
      tasks(
        [
          { description: "New Task 0", id: 0, isInEditMode: true },
          { description: "New Task 1", id: 1, isInEditMode: false }
        ],
        {
          type: "TOGGLE_EDITMODE",
          id: 1
        }
      )
    ).toEqual([
      { description: "New Task 0", id: 0, isInEditMode: false },
      { description: "New Task 1", id: 1, isInEditMode: true }
    ]);
  });

  it("should handle CLEAR_ALL", () => {
    expect(
      tasks(
        [
          { description: "New Task 0", id: 0, isInEditMode: true },
          { description: "New Task 1", id: 1, isInEditMode: false }
        ],
        {
          type: "CLEAR_ALL"
        }
      )
    ).toEqual([]);
  });
});
