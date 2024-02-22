import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Optimization Engineer</title>
        <meta property="og:title" content="Principal Optimization Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
