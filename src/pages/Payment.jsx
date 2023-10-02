import React from 'react'
import NavBar from '../components/NavBar'
import qr from '../assets/img/morphis-camera-frame.png'
import code from '../assets/img/frame.png'
function Payment() {
  return (
	<div>
		<NavBar/>
		<span>Using the QR below to pay</span>
		<img src={qr} alt="" />
	</div>
  )
}

export default Payment