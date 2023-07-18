import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setPassword } from '../features/user';
import { ChangeEvent } from 'react';

const PasswordInput = () => {
  const dispatch = useDispatch();

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        onChange={handlePasswordChange}
        margin='dense'
      />
    </div>
  );
};

export default PasswordInput;
