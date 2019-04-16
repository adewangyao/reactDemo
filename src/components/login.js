import React,{Component} from "react";
import { NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Toast} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import loginAxios from '../routers/login.js'


class Login extends Component {
  constructor　(props) {
    super(props)
    this.state = {
      uname:'',
      pwd:'',
    }
  }
  // 登陆请求
  handleLogin = async () => {
    const {data:{data,meta}} = await loginAxios(this.state)
    console.log(data,meta)
    if(meta.status === 200) {
      this.props.history.push('./home')
    } else {
      this.setState({
        pwd:'',
        uname:''
      })
      this.showToast(meta.msg)
    }
  }
  // 登陆失败信息提示
  showToast = (msg) => {
    Toast.info(msg+'!', 1);
  }
  // 登陆信息输入
  loginValue (e,key) {
    console.log(e,key)
    this.setState({
      [key]:e
    })
  }
  render () {
    return <div>

        <NavBar>登陆</NavBar>
      <WingBlank size="md">
        <List renderHeader={() => '请输入您的登陆信息'}>
        <div>
          <WhiteSpace size="md"/>
            <InputItem value={this.state.uname} onChange={(e) => {this.loginValue(e,'uname')}}
          >姓名</InputItem>
          </div>
          {/* </WhiteSpace> */}
          <WhiteSpace size="md"/>
          <InputItem value={this.state.pwd} onChange={(e) => { this.loginValue(e, 'pwd')}}
          >密码</InputItem>
          {/* </WhiteSpace> */}
        </List>
      </WingBlank>
      <WingBlank size="md">
      <Button type="primary" onClick={this.handleLogin}>登陆</Button>
      </WingBlank>
    </div>
  }


}
export default Login
