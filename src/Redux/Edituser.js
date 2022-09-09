import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
const API_URL = 'http://localhost:3001/api/v1/user/login'
const API_URL_USER = 'http://localhost:3001/api/v1/user/profile'

//Post data user

const PostUser = async PostUser => {
  const { user } = useSelector(state => state.auth)
  console.log(user.body)
  const response = await axios.get(API_URL_USER, PostUser, {
    headers: {
      Authorization: 'Bearer ' + user.body.token
    }
  })
  if (response.data) {
    localStorage.setItem('userdata', JSON.stringify(response.data))
  }
  return response.data
}

export default PostUser
