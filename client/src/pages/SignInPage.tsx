import UsernameInput from '../components/common/UsernameInput';
import PasswordInput from '../components/common/PasswordInput';
import SignInButton from '../components/SignInButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  background: 'rgba(173, 216, 230, 0.75)',
}));

const SignInPage = () => {
  return (
    <StyledBox>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Card>
          <CardContent>
            <UsernameInput />
            <PasswordInput />
            <SignInButton />
          </CardContent>
        </Card>
      </Box>
    </StyledBox>
  );
};

export default SignInPage;
