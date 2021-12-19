import Store from "./redux/store";
import { Provider } from "react-redux";
import { Layout } from "antd";
import SignIn from "./components/SignIn";
import Container from "./components/Container";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const { Header, Content } = Layout;

  return (
    <Provider store={Store}>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <SignIn />
          </Header>
          <Content>
            <Container />
          </Content>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
