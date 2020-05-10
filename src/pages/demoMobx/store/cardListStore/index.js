import { observable,action } from 'mobx'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

class CardListStore {//模拟请求数据
  @observable dataSource = [];

  @action.bound getCardList () {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(dataSource) 
      },2000)
    })
  }

  @action.bound setCardList (dataSource) {
    this.dataSource = [...dataSource];
  }

  @action.bound addCardList (cardList = {}) {
    this.dataSource = [...this.dataSource,cardList];
  }

  @action.bound delCardList (index) {
    let dataSource = this.dataSource;
    dataSource.splice(index,1);
    this.dataSource = [...dataSource];
  }
}

export default new CardListStore()
