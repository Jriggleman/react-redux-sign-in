import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { setUsername, setPassword, setEmail } from '../features/user';

interface UserState {
  user: {
    username: string;
    password: string;
    email: string;
  };
}

const LogOutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setUsername(''));
    dispatch(setPassword(''));
    dispatch(setEmail(''));
    navigate('/');
  };
  return (
    <div>
      <Button
        variant='contained'
        onClick={handleClick}
        style={{ marginTop: '1rem', width: '14rem' }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOutButton;
