import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Axios from 'axios';
import { useState } from 'react';

interface UserState {
  user: {
    username: string;
    password: string;
  };
}

const SignUpButton = () => {
  const user = useSelector((state: UserState) => state.user);
  const [signInMessage, setSignInMessage] = useState('');

  const handleClick = () => {};
  return (
    <div>
      <Button
        variant='contained'
        disabled={user.username === '' || user.password === ''}
        onClick={handleClick}
        style={{ marginTop: '1rem', width: '14rem' }}
      >
        Sign In
      </Button>
      {signInMessage && <p>{signInMessage}</p>}
    </div>
  );
};

export default SignUpButton;
