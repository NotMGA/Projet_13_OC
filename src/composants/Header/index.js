import '../../Style/Header/index.css'
import React from 'react'
import img from '../../Assets/argentBankLogo.png'
import logoutimg from '../../Assets/logoutv2.png'
import Profil from '../../Assets/profil.png'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reste } from '../../Redux/authSlice'
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { info } = useSelector(state => state.auth)
  let name = ''
  if (info == null) {
  } else {
    name = info.body.firstName
  }

  const onLougout = () => {
    dispatch(logout())
    dispatch(reste())
    navigate('/')
  }
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={img}
          alt="Argent Bank Logo"
        ></img>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {user ? (
          <div className="right_conect">
            <img className="imglogout" src={Profil} alt=" profil"></img>
            <div>{name}</div>

            <a className="main-nav-item" href="./login" onClick={onLougout}>
              <img className="imglogout" src={logoutimg} alt="logout"></img>
              <i className="fa fa-user-circle"></i>
              Logout
            </a>
          </div>
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
