import {
  flow,
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
} from "mobx-state-tree";
import { applySnapshot } from "mobx-state-tree";

const Task = types.model("Task", {
  _id: types.identifier,
  taskName: types.string,
  taskDescription: types.string,
  startDate: types.string,
  endDate: types.string,
});

const Note = types.model("Note", {
  _id: types.identifier,
  noteTitle: types.string,
  noteContent: types.string,
  dateCreated: types.string,
});

const Project = types
  .model("Project", {
    _id: types.identifier,
    key: types.string,
    name: types.string,
    description: types.string,
    namespace: types.string,
    tasks: types.array(Task),
    notes: types.array(Note),
  })
  .actions((self) => ({
    load: flow(function* load(projectKey) {
      const response = yield window.fetch(
        `http://127.0.0.1:5000/projects/${projectKey}`
      );
      const projectData = yield response.json();
      applySnapshot(self, projectData);
    }),
    // ... other actions
  }));

type IProject = Instance<typeof Project>;
type ProjectSnapshotIn = SnapshotIn<typeof Project>;
type ProjectSnapshotOut = SnapshotOut<typeof Project>;

export { Project, Task, Note };
export type { IProject, ProjectSnapshotIn, ProjectSnapshotOut };
