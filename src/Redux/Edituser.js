import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
const API_URL = 'http://localhost:3001/api/v1/user/login'
const API_URL_USER = 'http://localhost:3001/api/v1/user/profile'
//Post data user

const PostUser = async PostUserinfo => {
  console.log()
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user.body.token)

  console.log('ssssssssssssssssssssssssssssssssssssssssssssss')
  const response = await axios.put(API_URL_USER, PostUserinfo, {
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
