import '../../Style/Header/index.css'
import React, { useReducer } from 'react'
import img from '../../Assets/argentBankLogo.png'
import { link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reste } from '../../Redux/authSlice'
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const onLougout = () => {
    dispatch(logout())
    dispatch(reste())
    navigate('/')
  }
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={img}
          alt="Argent Bank Logo"
        ></img>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {user ? (
          <a className="main-nav-item" href="./login" onClick={onLougout}>
            <i className="fa fa-user-circle"></i>
            Logout
          </a>
        ) : (
          <>
            <a className="main-nav-item" href="./login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header
