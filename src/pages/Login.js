import React from 'react';
import { Input, Button } from 'antd'
import style from './css/login.less'
import { login } from '../services/indexPage'
import MD5 from '../utils/MD5'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
    }
  }

  // 登录
  async login() {
    const params = {
      data: {
        account: this.state.user,
        password: MD5(this.state.pwd),
        sysId: 'biwork'
      }
    }
    const loginRes = await login(params)
    if (loginRes) {
      console.log(loginRes)
      // 菜单列表
      localStorage.setItem('menus', JSON.stringify(loginRes.data.menus))
      // 用户信息
      localStorage.setItem('user', JSON.stringify(loginRes.data.user))
      // token
      localStorage.setItem('token', loginRes.data.token)
    }
  }

  render() {
    return (
      <div className={style.loginDiv}>
        <div className={style.middleForm} style={{display: 'flex', alignItems: 'center'}}>
          <div>
            <img src={require('../assets/login_icon.png')} alt="" style={{margin: '20px', width: 265, height: 172}} />
          </div>
          <div style={{flex: 1}}>
            <div style={{display: 'flex', alignItems: 'center', fontSize: 16, color: '#333333', justifyContent: 'center', marginBottom: 10}}>
              <img src={require('../assets/login_logo.png')} alt="" style={{ width: 30, height: 30, marginRight: 10}} />
              <span>机蜜数据管理平台</span>
            </div>
            <Input
              placeholder="请输入账号"
              value={this.state.user}
              style={{margin: '10px 0'}}
              onChange={e => this.setState({ user: e.target.value })}
            />
            <Input
              placeholder="请输入密码"
              type="password"
              style={{margin: '10px 0'}}
              value={this.state.pwd}
              onChange={e => this.setState({ pwd: e.target.value })}
            />
            {/* {
              this.state.showCode &&
              <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0'}}>
                <Input
                  placeholder="验证码"
                  suffix={this.state.code ? <Icon type="close-circle" onClick={() => this.setState({code: ''})} /> : null}
                  value={this.state.code}
                  onChange={e => this.onChangecode(e)}
                />
                <Button disabled={this.state.time > 0} type="primary" style={{marginLeft: 10, fontSize: 8}} onClick={this.getCode}>{this.state.time > 0 ? `${this.state.time}s` : '获取验证码'}</Button>
              </div>
            } */}
            <div style={{width: '100%', textAlign: 'center', marginTop: '20px'}}>
              <Button onClick={() => this.login()} type="primary" size="large" style={{width: '100%'}}>立即登录</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {

};

export default Login;

