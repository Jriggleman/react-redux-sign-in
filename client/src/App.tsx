import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup/*' element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
