import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/login'

// Login user
const login = async userData => {
  // axio request to the API
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    //store the data
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//logout user

const logout = () => {
  // remove all item in the storage including the user info with the auth token
  localStorage.removeItem('user')
  localStorage.removeItem('info')
}

const authService = {
  login,
  logout
}

export default authService
