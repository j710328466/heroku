import React from 'react'
import {Menu, Layout} from 'antd'
import Link from 'umi/link'
import router from 'umi/router'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: JSON.parse(localStorage.getItem('menus')) || '',
      newMenus: ''
    }
  }

  componentWillMount() {
    // 判断是否 登录
    if (!localStorage.getItem('token')) {
      router.push('/login')
      return 
    }
    const firtsMenu = []
    this.state.menus.forEach(el => {
      if (el.parentId === 'biRoot') {
        firtsMenu.push(el)
      }
    })
    const newMenus = firtsMenu.sort(this._compare('sort'))
    newMenus.forEach(menu => {
      menu.childs = []
      this.state.menus.forEach(el => {
        if (el.parentId === menu.id) {
          menu.childs.push(el)
        }
      })
    })
    this.setState({
      newMenus
    })
  }

  // 排序
  _compare(val) {
    return function (a, b) {
      var val1 = a[val]
      var val2 = b[val]
      return val1 - val2
    }
  }

  render() {
    return (
      <Sider 
        trigger={null}
        collapsible
        collapsed={false}
      >
        <div style={{ textAlign: 'center', background: `url(${require('../assets/menuBg.png')}) no-repeat center 100%/100% 100%`}} >
          <img style={{ margin: '13px 0' }} src={require('../assets/logo.png')} alt="logo" />
          <span style={{color: 'white', marginLeft: 7}}>机蜜数据管理平台</span>
        </div>
        <Menu
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['dataProfile']}
          // onSelect={(e) => {
          // }}
        >
          {this.state.newMenus.map(el => el.childs.length ? 
            <SubMenu title={el.name} key={el.id}>
              {el.childs.map(els => <Menu.Item key={els.id}><Link to={'/' + el.id + '/' + els.id} >{els.name}</Link></Menu.Item>)}
            </SubMenu>
            :
            <Menu.Item key={el.id} ><Link to="/" >{el.name}</Link></Menu.Item>
          )}
        </Menu>
      </Sider>
    )
  }
}

export default LeftMenu