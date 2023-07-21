import UsernameInput from './common/UsernameInput';
import PasswordInput from './common/PasswordInput';
import SignUpButton from './SignUpButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  background: 'rgba(173, 216, 230, 0.75)',
}));

const SignUpPage = () => {
  return (
    <StyledBox>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Card>
          <CardContent>
            <UsernameInput />
            <PasswordInput />
            <SignUpButton />
          </CardContent>
        </Card>
      </Box>
    </StyledBox>
  );
};

export default SignUpPage;
