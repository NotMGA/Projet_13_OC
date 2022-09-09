import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Page_home'

import ReactDOM from 'react-dom/client'
import Login from './Pages/Page_login'
import User from './Pages/Page_user'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
