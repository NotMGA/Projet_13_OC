import '../../Style/Edit_user/index.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Get_info_user from '../../Redux/Userinfo'
import { getDataUser, Postdatauser } from '../../Redux/authSlice.js'
import PostUser from '../../Redux/Edituser'

import { useNavigate } from 'react-router-dom'
function Edit() {
  const [hideform, sethideform] = useState(false)
  const [userformData, setuserFormData] = useState({
    lastName: '',
    firstName: ''
  })
  const { lastName, firstName } = userformData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  Get_info_user()
  const { info } = useSelector(state => state.auth)

  const firstName_ = info.body.firstName
  const lastName_ = info.body.lastName

  console.log('info------', info)
  if (localStorage.length == 0) {
    navigate('/')
  }

  const onChange = e => {
    setuserFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleclick = () => {
    sethideform(!hideform)
  }

  //send data

  const onSubmit = e => {
    e.preventDefault()
    const formDatasend = {
      firstName,
      lastName
    }
    console.log(formDatasend)
    dispatch(Postdatauser(formDatasend))
  }

  return (
    <div className="header">
      <h1>
        Welcome back ---
        <br />
        {/* {firstName_} {lastName_} */}
        {firstName_} {lastName_}
      </h1>
      <button className="edit-button" onClick={handleclick}>
        Edit Name
      </button>
      <form
        onSubmit={onSubmit}
        className="form_user"
        style={{ display: hideform ? 'block' : 'none' }}
      >
        <h2>Edit name</h2>
        <div className="input-wrapper">
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="sign-in-button_">
          Edit
        </button>
      </form>
    </div>
  )
}
export default Edit
