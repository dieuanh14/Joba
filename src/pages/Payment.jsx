import React from 'react'
import NavBar from '../components/NavBar'
import qr from '../assets/img/morphis-camera-frame.png'
import code from '../assets/img/frame.png'

import '../scss/payment.scss'
function Payment() {
  return (
	<div className='payment'>
		<NavBar/>
		<div className="main__payment">
		<span>Using the QR below to pay</span>
		<img src={qr} alt="" className='qr__bar'/>
		<img src={code} alt="" className='code' />
		</div>
	</div>
  )
}

export default Payment