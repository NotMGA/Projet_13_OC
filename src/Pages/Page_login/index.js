import Footer from '../../composants/Footer'
import Header from '../../composants/Header'
import LoginUI from '../../composants/Login_UI'
import React from 'react'
import '../../Style/Page_login/index.css'

function Login() {
  return (
    <div>
      <Header></Header>

      <LoginUI></LoginUI>

      <Footer></Footer>
    </div>
  )
}
export default Login
