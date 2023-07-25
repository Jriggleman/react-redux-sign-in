import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '../../features/user';
import { setError } from '../../features/error';
import { ChangeEvent, useState } from 'react';

interface ErrorState {
  error: {
    error: boolean;
  };
}

interface UserState {
  user: {
    password: string;
  };
}

const PasswordInput = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: ErrorState) => state.error.error);
  const password = useSelector((state: UserState) => state.user.password);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
    dispatch(setError(false));
  };

  return (
    <div>
      <TextField
        value={password}
        id='outlined-password-input'
        label='Password'
        type='password'
        variant='outlined'
        autoComplete='current-password'
        error={error}
        helperText={error ? 'Incorrect username or password' : ''}
        onChange={handlePasswordChange}
        style={{ marginTop: '1rem', width: '14rem' }}
      />
    </div>
  );
};

export default PasswordInput;
