// ForgotPasswordPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { initiatePasswordReset } from '../../store/features/ForgotPwdSlice';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    dispatch(initiatePasswordReset(email))
      .unwrap()
      .then(() => {
		navigate('/resetPwd'); // Navigate to the reset password page
      })
      .catch((error) => {
        console.error('Error initiating password reset:', error);
      });
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Submit</button>
    </div>
  );
}

export default ForgotPasswordPage;
