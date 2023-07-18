import './App.css';
import PasswordInput from './components/PasswordInput';
import SignInButton from './components/SignInButton';
import UsernameInput from './components/UsernameInput';

function App() {
  return (
    <div className='App'>
      <UsernameInput />
      <PasswordInput />
      <SignInButton />
    </div>
  );
}

export default App;
