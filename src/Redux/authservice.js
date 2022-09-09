import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/login'

// Register user
const register = async userData => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async userData => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//logout user

const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('info')
}

const authService = {
  register,
  login,
  logout
}

export default authService
