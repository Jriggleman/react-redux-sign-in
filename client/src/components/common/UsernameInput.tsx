import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../features/user';
import { ChangeEvent } from 'react';

const UsernameInput = () => {
  const dispatch = useDispatch();

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Username'
        variant='outlined'
        onChange={handleUsernameChange}
        style={{ marginTop: '1rem', width: '14rem' }}
      />
    </div>
  );
};

export default UsernameInput;
