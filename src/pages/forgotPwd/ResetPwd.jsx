// ResetPasswordPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../store/features/ForgotPwdSlice';
import { useNavigate } from 'react-router-dom';

function ResetPwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    dispatch(resetPassword({ code, newPassword, confirmPassword }))
      .unwrap()
      .then(() => {
        navigate('/login'); // Navigate to the login page
      })
      .catch((error) => {
        console.error('Error resetting the password:', error);
      });
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label>Code:</label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <label>New Password:</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Submit</button>
    </div>
  );
}

export default ResetPwd;
