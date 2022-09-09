import '../../Style/Edit_user/index.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Get_info_user from '../../Redux/Userinfo'
import { getDataUser } from '../../Redux/authSlice'

import { useNavigate } from 'react-router-dom'
function Edit() {
  const test = ''
  const [hideform, sethideform] = useState(false)
  const [userformData, setFormData] = useState({
    lastname: '',
    firstname: ''
  })
  const { lastName, firstName } = userformData
  getDataUser()
  const { info } = useSelector(state => state.auth)
  const firstName_ = info.body.firstName
  const lastName_ = info.body.lastName

  const navigate = useNavigate
  console.log('info------', info)
  if (localStorage.length == 0) {
    navigate('/')
  }

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleclick = () => {
    sethideform(!hideform)
  }

  return (
    <div className="header">
      <h1>
        Welcome back ---
        <br />
        {firstName_} {lastName_}
      </h1>
      <button className="edit-button" onClick={handleclick}>
        Edit Name
      </button>
      <form
        className="form_user"
        style={{ display: hideform ? 'block' : 'none' }}
      >
        <h2>Edit name</h2>
        <div className="input-wrapper">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
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
