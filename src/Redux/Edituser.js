import axios from 'axios'
const API_URL_USER = 'http://localhost:3001/api/v1/user/profile'
//Post data user

const PostUser = async PostUserinfo => {
  const user = JSON.parse(localStorage.getItem('user'))

  const response = await axios.put(API_URL_USER, PostUserinfo, {
    headers: {
      Authorization: 'Bearer ' + user.body.token
    }
  })

  return response.data
}

export default PostUser
