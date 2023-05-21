import { Instance, applySnapshot, flow, types } from "mobx-state-tree";
import { Project } from "./Project";


const RootStore = types.model("RootStore", {
  projects: types.array(Project)
}).actions((self) => ({
  loadProjects: flow(function* () {
    try {
      const response = yield fetch(
        "https://run.mocky.io/v3/3652899d-d56c-4f1c-af5a-80e199d6da65"
      );
      const projects = yield response.json();
      console.log("got projects", projects);
      applySnapshot(self.projects, projects);
    } catch (error) {
      console.error("Failed to load projects", error);
    }
  }),
  // ... other actions
}));

// export type { IRootStore } from Instance<typeof RootStore>;
export interface IRootStore extends Instance<typeof RootStore> {}
export { RootStore };







