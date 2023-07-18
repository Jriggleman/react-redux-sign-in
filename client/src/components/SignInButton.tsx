import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

interface UserState {
  user: {
    username: string;
    password: string;
  };
}

const SignInButton = () => {
  const [disabled, setDisabled] = useState(true);
  const user = useSelector((state: UserState) => state.user);

  useEffect(() => {
    isDisabled();
  }, [user]);

  const isDisabled = () => {
    if (user.username === '' || user.password === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return <Button disabled={disabled}>Sign In</Button>;
};

export default SignInButton;
