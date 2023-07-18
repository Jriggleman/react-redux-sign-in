import { useSelector } from 'react-redux';

interface UserState {
  user: {
    username: string;
    password: string;
  };
}

const SignInButton = () => {
  const user = useSelector((state: UserState) => state.user);

  const isDisabled = () => {};

  return <div>SignInButton</div>;
};

export default SignInButton;
