import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LogOutButton from '../components/LogOutButton';

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
  }, [user]);

  return (
    <StyledBox>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Card>
          <CardContent>
            <h1>Profile</h1>
            <p>Username: {profileInfo.username}</p>
            <p>Password: {profileInfo.password}</p>
            <p>Email: {profileInfo.email}</p>
            <LogOutButton />
          </CardContent>
        </Card>
      </Box>
    </StyledBox>
  );
};

export default ProfilePage;
