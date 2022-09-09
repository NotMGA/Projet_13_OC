import '../../Style/Account_user/index.css'
import React from 'react'
function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.account_title}</h3>
        <p className="account-amount">{props.account_amount}</p>
        <p className="account-amount-description">
          {props.account_amount_desc}
        </p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Account.defaultProps = {
  account_title: 'Argent Bank Checking (x8349)',
  account_amount: '$2,082.79',
  account_amount_desc: 'Available Balance'
}

export default Account
