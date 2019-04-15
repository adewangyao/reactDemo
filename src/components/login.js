import React,{Component} from "react";
import { NavBar, List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
class Login extends Component {
  constructor　(props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return <div>
        <NavBar>登陆</NavBar>
      <WingBlank size="md">
        <List renderHeader={() => '请输入您的登陆信息'}>
        <div>
          <WhiteSpace size="md"/>
          <InputItem
          >姓名</InputItem>
          </div>
          {/* </WhiteSpace> */}
          <WhiteSpace size="md"/>
          <InputItem
          >密码</InputItem>
          {/* </WhiteSpace> */}
        </List>
      </WingBlank>
      <WingBlank size="md">
      <Button type="primary">登陆</Button>
      </WingBlank>
    </div>
  }


}
export default Login
