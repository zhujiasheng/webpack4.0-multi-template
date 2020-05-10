import { observable,action } from 'mobx';

class baseListStore {
  @observable count = 10

  @action.bound add () {
    this.count++
  }

  @action.bound desc () {
    this.count--
  }
}

export default new baseListStore()
