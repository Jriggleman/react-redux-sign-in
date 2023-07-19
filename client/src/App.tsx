import './App.css';
import PasswordInput from './components/PasswordInput';
import SignInButton from './components/SignInButton';
import UsernameInput from './components/UsernameInput';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack className='App'>
      <UsernameInput />
      <PasswordInput />
      <SignInButton />
    </Stack>
  );
}

export default App;
