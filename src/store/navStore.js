import { makeAutoObservable } from "mobx";

class NavStore {
  page = "index";

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page = "index") {
    this.page = page;
  }
}

const navStore = new NavStore();

export default navStore;
