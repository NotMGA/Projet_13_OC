import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
const API_URL = 'http://localhost:3001/api/v1/user/login'
const API_URL_USER = 'http://localhost:3001/api/v1/user/profile'

//get user datas

const get_info_user = async infoUser => {
  const { user } = useSelector(state => state.auth)
  console.log(user.body)
  const response = await axios.post(API_URL_USER, infoUser, {
    headers: {
      Authorization: 'Bearer ' + user.body.token
    }
  })
  if (response.data) {
    localStorage.setItem('info', JSON.stringify(response.data))
  }

  return response.data
}

export default get_info_user
