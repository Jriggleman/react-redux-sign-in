import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setEmail } from '../features/user';
import { ChangeEvent } from 'react';

export const EmailInput = () => {
  const dispatch = useDispatch();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Email Address'
        variant='outlined'
        autoComplete='current-password'
        onChange={handleEmailChange}
        style={{ marginTop: '1rem', width: '14rem' }}
      />
    </div>
  );
};

export default EmailInput;
