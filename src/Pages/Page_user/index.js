import Account from '../../composants/Account_user.js'
import Edit from '../../composants/Edit_user'
import Footer from '../../composants/Footer'
import Header from '../../composants/Header'
import '../../Style/Page_user/index.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getDataUser } from '../../Redux/authSlice.js'
import { useEffect } from 'react'

function User() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataUser())
  })

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
