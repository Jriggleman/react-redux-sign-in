import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setPassword } from '../../features/user';
import { ChangeEvent } from 'react';

const PasswordInput = () => {
  const dispatch = useDispatch();

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <div>
      <TextField
        id='outlined-password-inpout'
        label='Password'
        type='password'
        variant='outlined'
        autoComplete='current-password'
        onChange={handlePasswordChange}
        style={{ marginTop: '1rem', width: '14rem' }}
      />
    </div>
  );
};

export default PasswordInput;
