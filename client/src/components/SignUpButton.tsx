import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Axios from 'axios';

interface UserState {
  user: {
    username: string;
    password: string;
    email: string;
  };
}

const SignUpButton = () => {
  const user = useSelector((state: UserState) => state.user);

  const handleClick = () => {
    Axios.post('http://localhost:5000/users/signup', {
      username: user.username,
      password: user.password,
      email: user.email,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
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
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpButton;
