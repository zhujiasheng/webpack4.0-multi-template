import React from "react";
import { observer } from "mobx-react";
import { Row, Col, message, Button } from "antd";

@observer
class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.currInput = React.createRef();
    this.columns = [
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "操作",
        render: (text, record, index) => {
          return <Button onClick={() => this.delList(index)}>删除</Button>;
        },
      },
    ];
  }

  async getCardList() {
    let result = await this.AppStore.CardListStore.getCardList();
    this.AppStore.CardListStore.setCardList(result);
  }

  componentWillMount() {
    this.getCardList();
  }

  delList = (index) => {
    this.AppStore.CardListStore.delCardList(index);
  };

  // onChange = () => {
  //   console.log(this.currInput.current.state.value,'this.input')
  // }

  addList = () => {
    const { value } = this.currInput.current.state;
    const rand = Math.ceil(Math.random() * 100);
    const rand2 = Math.ceil(Math.random() * 100) + 101;
    if (!value) {
      message.error("名称不能为空");
      return;
    }
    this.AppStore.CardListStore.addCardList({
      key: `${rand2}${rand}`,
      name: value,
      age: rand,
      address: `西湖区湖底公园${rand}号`,
    });
    console.log(this.AppStore.CardListStore);
  };

  render() {
    const Table = this.Table;
       const Input = this.Input;
    const { dataSource } = this.AppStore.CardListStore || [];

    return (
      <div>
        <Row gutter={16} style={{ marginBottom: "15px" }}>
          <Col span={12}>
            <Input allowClear onChange={this.onChange} ref={this.currInput} />
          </Col>
          <Col span={12}>
            <Button onClick={this.addList}>添加</Button>
          </Col>
        </Row>
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default CardList;
