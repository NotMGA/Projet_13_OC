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

  // const { info } = useSelector(state => state.auth)
  // console.log(info, 'ddddddddddddddddddddddddddd')
  // const firstName_ = info.body.firstName
  // const lastName_ = info.body.lastName
  const { info } = useSelector(state => state.auth)

  console.log(info, 'ddddddddddddddddddddddddddd')
  let firstName_ = ''
  let lastName_ = ''
  if (!info) {
    navigate(0)
  } else {
    firstName_ = info.body.firstName
    lastName_ = info.body.lastName
    navigate(0)
  }
  // firstName_ = info.body.firstName
  // lastName_ = info.body.lastName

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
    setuserFormData({
      firstName: info.body.firstName,
      lastName: info.body.lastName
    })
  }

  //send data

  const onSubmit = e => {
    e.preventDefault()
    const formDatasend = {
      firstName,
      lastName
    }
    navigate(0)
    sethideform(!hideform)
    dispatch(Postdatauser(formDatasend))
  }

  const Close = e => {
    sethideform(!hideform)
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {/* {firstName_} {lastName_} */}
      </h1>
      <div
        className="name-edit-warp"
        style={{ display: hideform ? 'none' : 'flex' }}
      >
        <h2>
          {firstName_} {lastName_}
        </h2>

        <button className="edit-button" onClick={handleclick}>
          Edit Name
        </button>
      </div>

      <form
        onSubmit={onSubmit}
        className="form_user"
        style={{ display: hideform ? 'flex' : 'none' }}
      >
        <div className="input">
          <div className="input-wrapper">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userformData.firstName}
              onChange={onChange}
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userformData.lastName}
              onChange={onChange}
              className="input-field"
            />
          </div>
        </div>
        <div className="input">
          <button type="submit" className="send-button_">
            Edit
          </button>
          <button className="send-button_" onClick={Close}>
            Close
          </button>
        </div>
      </form>
    </div>
  )
}
export default Edit
