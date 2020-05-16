import { observable, action } from "mobx";

class BaseListStore {
  @observable count = 10;

  @action.bound add() {
    this.count++;
  }

  @action.bound desc() {
    this.count--;
  }
}

export default new BaseListStore();
