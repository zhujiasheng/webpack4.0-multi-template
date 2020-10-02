import "./RLayoutUI.css";
import { Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;

function RLayoutUI(props) {
  const { route, handleMenu, history, renderRoutes, reducerLayout } = props;
  const { current, routerList } = reducerLayout;

  return (
    <Layout theme="light">
      <Sider theme="light" className="rlayout-menu">
        <Menu theme="lights" selectedKeys={[current]} mode="inline">
          {routerList &&
            routerList.map((pathName, key) => (
              <Menu.Item
                onClick={() => handleMenu(pathName, history)}
                key={pathName}
              >
                {pathName.replace("/", "")}
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
      <Layout theme="light">
        <Header className="rlayout-header" theme="light"></Header>
        <Content theme="light">{renderRoutes(route.routes)}</Content>
      </Layout>
    </Layout>
  );
}

export default RLayoutUI;
