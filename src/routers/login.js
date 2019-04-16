// import react from 'react'
import axios from '../http'

// d登陆验证
const loginAxios =  function (data) {

  return ( axios.post('users/login',data))
}
export default loginAxios
