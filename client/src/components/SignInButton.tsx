import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Axios from 'axios'
import UsernameInput from './UsernameInput';

interface UserState {
  user: {
    username: string;
    password: string;
  };
}

const SignInButton = () => {
  const user = useSelector((state: UserState) => state.user);

  const handleClick = () => {
    Axios.get('http://localhost:5000/users', {
        params:
        
    })
    if (user.username === 'Luke' && user.password === 'Skywalker')
  }

  return (
    <div>
      <Button
        variant='contained'
        disabled={user.username === '' || user.password === ''}
        onClick={}
        style={{ marginTop: '1rem', width: '14rem' }}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignInButton;
