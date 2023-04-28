import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu,  theme,Button } from 'antd';
import React from 'react';
import { useEffect, useState } from "react";
import { useLocation, useNavigate ,BrowserRouter as Router, Route , Routes} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate();
  return (
    <Router>
        <Routes>
            <Route
            path='/'
            element={
    <Layout theme={'dark'} minHeight='100%'>
      <Header
          style={{
            padding: 0,
            backgroundColor:'black'
          }}
        />
        {/* here i was thinking of using pageheader instead of header but it is not being imported ask sir of it--> */}
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{backgroundColor:'black'}}
      >
        <div className="logo" />
        <Menu mode="horizontal" color='black'
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        style={{color:'white',background:'black',padding:'10px'}}
         items={[{
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            color:colorBgContainer,
            key:"/"
          },
          {
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            color:colorBgContainer,
            key:'/Subscribers'
          },
        ]}
       />
        <Menu
          theme='black'
          mode="inline"
          // items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          //   (icon, index) => ({
          //     key: String(index + 1),
          //     icon: React.createElement(icon),
          //     label: `nav ${index + 1}`,
          //   }),
          // )}
          items={[{
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            icon:React.createElement(UserOutlined),
            key:"/"
          },
          {
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            icon:React.createElement(UploadOutlined)
          },
          {
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
          icon:React.createElement(VideoCameraOutlined),
          }
          ]}
        />
      </Sider>
        <Content
          style={{
            colorScheme:'dark',
            backgroundColor:'black',
            color:'white'
          }}
        >
          <div
            style={{
              padding: 0,
              minHeight: 650,
              colorScheme:'dark'
            }}
          >
            content
          </div>
        </Content>
        </Layout>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor:'black',
            color:'white',
            minHeight:'230'
          }}
        >
          Sid's Dashboard '23
        </Footer>
    </Layout>
            }/>
        <Route
            path='/Production'
            element={
    <Layout theme={'dark'} minHeight='100%'>
      <Header
          style={{
            padding: 0,
            backgroundColor:'black'
          }}
        />
        {/* here i was thinking of using pageheader instead of header but it is not being imported ask sir of it--> */}
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{backgroundColor:'black'}}
      >
        <div className="logo" />
        <Menu mode="horizontal" color='black'
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        style={{color:'white',background:'black',padding:'10px'}}
         items={[{
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            color:colorBgContainer,
            key:"/"
          },
          {
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            color:colorBgContainer,
            key:'/Subscribers'
          },
        ]}
       />
        <Menu
          theme='black'
          mode="inline"
          // items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          //   (icon, index) => ({
          //     key: String(index + 1),
          //     icon: React.createElement(icon),
          //     label: `nav ${index + 1}`,
          //   }),
          // )}
          items={[{
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            icon:React.createElement(UserOutlined),
            key:"/"
          },
          {
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
            icon:React.createElement(UploadOutlined)
          },
          {
            label:(<Button style={{background:'rgb(5, 242, 25)'}}>Dev</Button>),
          icon:React.createElement(VideoCameraOutlined),
          }
          ]}
        />
      </Sider>
        <Content
          style={{
            colorScheme:'dark',
            backgroundColor:'black',
            color:'white'
          }}
        >
          <div
            style={{
              padding: 0,
              minHeight: 650,
              colorScheme:'dark'
            }}
          >
            content
          </div>
        </Content>
        </Layout>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor:'black',
            color:'white',
            minHeight:'230'
          }}
        >
          Sid's Dashboard '23
        </Footer>
    </Layout>
            }/>
    </Routes>
    </Router>
  );
};
export default App;