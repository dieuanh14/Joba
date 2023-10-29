import React from 'react'
import NavBar from '../components/NavBar'
import qr from '../assets/img/qr-only.png'
import frame from '../assets/img/morphis-camera-frame.png'
import '../scss/payment.scss'
function Payment() {
  return (
	<>
	<NavBar/>
	<div className='payment'>
		<div className="main__payment">
		<span>Using the QR below to pay</span>
		<img src={qr} alt="" className='qr__bar'/>
		<img src={frame} alt="" className='code' />
		</div>
	</div>
	</>
  )
}

export default Payment