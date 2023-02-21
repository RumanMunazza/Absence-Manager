import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu, Avatar, Typography,Table,Search } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { fetchAbsences } from "./state/actions/absences";
import Header from "./components/Header.style";
import Absences from "./views/Absences";
import "./App.css";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbsences());
  }, [dispatch]);

  const { data, isFetching, isError, error } = useSelector(
    (state) => state.absences
  );

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      
      <Header>
      
        <Title level={3} style={{ color: "white" }}>
          Absence Manager
        </Title>
        
        //<Menu
          //ode="horizontal"
         
          //defaultSelectedKeys={["1"]}
          //items={[
            //{ key: 1, label: "Absence Manager" },
            //{ key: 2, label: "Time Sheet" },
          //]}
          
        />
       
       
      </Header>
      <Content
        style={{
          padding: "1rem 50px 0",
        }}
      >
        <Absences
          absences={data}
          isLoading={isFetching}
          isError={isError}
          error={error}
          
        />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
       
      </Footer>
    </Layout>
  );
}

export default App;