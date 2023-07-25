import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup/*' element={<SignUpPage />} />
        <Route path='/profile/*' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
