import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LogOutButton from '../components/LogOutButton';
import Axios from 'axios';

interface UserState {
  user: {
    username: string;
    password: string;
    email: string;
  };
}

const StyledBox = styled(Box)(({ theme }) => ({
  background: 'rgba(173, 216, 230, 0.75)',
}));

const CenteredCardContent = styled(CardContent)({
  textAlign: 'center',
});

const ProfilePage = () => {
  const user = useSelector((state: UserState) => state.user);
  const [profileInfo, setProfileInfo] = useState<UserState['user']>({
    username: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    // Update the local state with user information when component mounts
    setProfileInfo(user);

    const getEmail = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5000/users/profile?username=${user.username}`
        );
        const { email } = response.data;
        setProfileInfo((prevProfileInfo) => ({ ...prevProfileInfo, email }));
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    getEmail();
  }, [user]);

  return (
    <StyledBox>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Card>
          <CenteredCardContent>
            <h1>Profile</h1>
            <p>Username: {profileInfo.username}</p>
            <p>Password: {profileInfo.password}</p>
            <p>Email: {profileInfo.email}</p>
            <LogOutButton />
          </CenteredCardContent>
        </Card>
      </Box>
    </StyledBox>
  );
};

export default ProfilePage;
