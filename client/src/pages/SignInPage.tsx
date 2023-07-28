import UsernameInput from '../components/common/UsernameInput';
import PasswordInput from '../components/common/PasswordInput';
import SignInButton from '../components/SignInButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPassword, setUsername } from '../features/user';

const StyledBox = styled(Box)(({ theme }) => ({
  background: 'rgba(173, 216, 230, 0.75)',
}));

const CenteredCardContent = styled(CardContent)({
  textAlign: 'center',
});

const SignInPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUsername(''));
    dispatch(setPassword(''));
  };

  return (
    <StyledBox>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Card>
          <CenteredCardContent>
            <h1>Sign In</h1>
            <UsernameInput />
            <PasswordInput />
            <SignInButton />
            <p>
              Don't have an account?{' '}
              <Link onClick={handleClick} to='/signup'>
                Sign Up
              </Link>
            </p>
          </CenteredCardContent>
        </Card>
      </Box>
    </StyledBox>
  );
};

export default SignInPage;
