import Banner from '../../composants/Banner_home'
import Header from '../../composants/Header'
import Feature from '../../composants/Feature_home'
import src1 from '../../Assets/icon-chat.png'
import src2 from '../../Assets/icon-money.png'
import src3 from '../../Assets/icon-security.png'
import '../../Style/Page_home/index.css'
import Footer from '../../composants/Footer'
import React from 'react'

function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="features">
        <Feature
          src={src1}
          h3="You are our #1 priority"
          p="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        ></Feature>
        <Feature
          src={src2}
          h3="More savings means higher rates"
          p="The more you save with us, the higher your interest rate will be!"
        ></Feature>
        <Feature
          src={src3}
          h3="Security you can trust"
          p="We use top of the line encryption to make sure your data and money is always safe."
        ></Feature>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Home
