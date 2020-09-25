import { Row, Col, Button, Input, Table } from "antd";
function TodoListUI(props) {
  const { dataSource, addList, inputValue, setInputValue, columns } = props;

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={16} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Input
            allowClear
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <Button onClick={addList}>添加</Button>
        </Col>
      </Row>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default TodoListUI;
