import '../../Style/Login_UI/index.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, reste, getDataUser } from '../../Redux/authSlice.js'
import { useNavigate } from 'react-router-dom'
import Get_info_user from '../../Redux/Userinfo'
function Login_UI() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )
  useEffect(() => {
    console.log('iserror', isError)
    console.log('isccues', isSuccess)
    if (isError) {
      navigate('/')
    }

    if (isSuccess || user) {
      navigate('/user')
    }

    dispatch(reste())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = e => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
    // dispatch(getDataUser())
  }

  if (isLoading) {
    return
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
export default Login_UI
