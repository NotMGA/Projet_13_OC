import axios from 'axios'
const API_URL_USER = 'http://localhost:3001/api/v1/user/profile'

//get user datas

const Get_info_user = async infoUser => {
  const user = JSON.parse(localStorage.getItem('user'))
  const response = await axios.post(API_URL_USER, infoUser, {
    headers: {
      Authorization: 'Bearer ' + user.body.token
    }
  })
  return response.data
}

export default Get_info_user
