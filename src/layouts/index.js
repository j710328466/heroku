import React from 'react'
import { Layout } from 'antd'
import styles from './index.css'
import withRouter from 'umi/withRouter'
import LeftMenu from './LeftMenu';
import BreadCrumbs from '../components/Breakcrumbs'
import Login from '../pages/Login'
import dynamic from 'umi/dynamic'
import Loading from '../components/Loading'

const { Header, Content} = Layout
const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

const App = dynamic(async function() {
  await delay(1000)
  return ({children, location}) => {
    // 登录界面
    if (location.pathname === '/login') {
      return <Login />
    }
    // 内容界面
    return (
      <Layout className={styles.normal}>
        <LeftMenu location={location} />
        <Layout>
          <Header className={styles.header}>
            <BreadCrumbs />
          </Header>
          <Content style={{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: 280 }} >
            { children }
          </Content>
        </Layout>
      </Layout>
    )
  }
}, {
  loading() {
    return (
      <Loading />
    )
  }
})

export default withRouter(App)