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

const SignInButton = () => {
  const user = useSelector((state: UserState) => state.user);
  const [signInMessage, setSignInMessage] = useState('');

  const handleClick = () => {
    Axios.get('http://localhost:5000/users', {
      params: {
        username: user.username,
        password: user.password,
      },
    })
      .then((response) => {
        if (user.username === response.data.username && user.password === response.data.password) {
          setSignInMessage('Sign in Successful');
        } else {
          setSignInMessage('Sign in Failed');
        }
      })
      .catch((error) => {
        setSignInMessage('Problem signing in');
      });
  };

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

export default SignInButton;
