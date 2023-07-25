import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Axios from 'axios';
import { setError } from '../features/error';
import { useDispatch } from 'react-redux';
import { setPassword } from '../features/user';
import { useNavigate } from 'react-router-dom';

interface UserState {
  user: {
    username: string;
    password: string;
  };
}

const SignInButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    Axios.post('http://localhost:5000/users/signin', {
      username: user.username,
      password: user.password,
    })
      .then((response) => {
        const { message } = response.data;
        dispatch(setError(false));
        console.log(message);
        navigate('/profile');
      })
      .catch(() => {
        dispatch(setError(true));
        dispatch(setPassword(''));
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
    </div>
  );
};

export default SignInButton;
