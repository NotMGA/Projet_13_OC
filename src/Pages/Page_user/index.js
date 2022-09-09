import Account from '../../composants/Account_user.js'
import Edit from '../../composants/Edit_user'
import Footer from '../../composants/Footer'
import Header from '../../composants/Header'
import '../../Style/Page_user/index.css'
import React from 'react'

function User() {
  return (
    <div>
      <Header />
      <div className="main_user">
        <Edit />
        <Account />
        <Account />
        <Account />
      </div>

      <Footer />
    </div>
  )
}
export default User
