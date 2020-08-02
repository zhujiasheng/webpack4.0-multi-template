import { renderRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./RLayout.css";
const { Header, Content } = Layout;

class RLayout extends React.Component {
  state = {
    current: "/cardList",
    routerList: ["/cardList", "/baseList"],
  };

  handleClick = (pathName) => {
    this.setState(
      {
        current: pathName,
      },
      () => {
        this.props.history.push(`${pathName}`);
      }
    );
  };

  render() {
    const { route } = this.props;
    const { current, routerList } = this.state;
    return (
      <>
        <Layout>
          <Header>
            <Menu selectedKeys={[current]} mode="horizontal">
              {routerList.map((pathName, key) => (
                <Menu.Item
                  onClick={() => this.handleClick(pathName)}
                  key={pathName}
                >
                  {pathName.replace("/", "")}
                </Menu.Item>
              ))}
            </Menu>
          </Header>
          <Content style={{ textAlign: "center" }}>
            {renderRoutes(route.routes, {
              someProp: "these extra props are optional",
            })}
          </Content>
        </Layout>
      </>
    );
  }
}

export default withRouter(RLayout);
