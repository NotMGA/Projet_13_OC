import '../../Style/Edit_user/index.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataUser, Postdatauser } from '../../Redux/authSlice.js'

import { useNavigate } from 'react-router-dom'

function Edit() {
  const [hideform, sethideform] = useState(false) //state for hide edit menu
  const [userformData, setuserFormData] = useState({
    lastName: '',
    firstName: ''
  })

  let firstName_ = ''
  let lastName_ = ''
  const { lastName, firstName } = userformData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let { info } = useSelector(state => state.auth)

  //cheack if the state info user is empty

  if (info == null) {
  } else {
    firstName_ = info.body.firstName
    lastName_ = info.body.lastName
  }

  //return to the main page if we are not login
  if (localStorage.length === 0) {
    navigate('/')
  }

  const onChange = e => {
    setuserFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  //update last name and first name  form
  const handleclick = () => {
    sethideform(!hideform)
    setuserFormData({
      firstName: info.body.firstName,
      lastName: info.body.lastName
    })
  }

  //send user first name and last name to the API
  const onSubmit = e => {
    e.preventDefault()
    const formDatasend = {
      firstName,
      lastName
    }

    sethideform(!hideform)
    dispatch(Postdatauser(formDatasend))
    setTimeout(function() {
      dispatch(getDataUser())
    }, 200)
  }

  const Close = e => {
    sethideform(!hideform)
  }
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
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
          <button type="submit" className="send-button__">
            Edit
          </button>
          <button className="send-button_" type="button" onClick={Close}>
            Close
          </button>
        </div>
      </form>
    </div>
  )
}
export default Edit
