import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router'
import { Link } from 'react-router-dom';

import Home from './components/pages/Home';
import ProtectedPage from './components/pages/ProtectedPage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import { useAuth } from './components/contexts/AuthContext';


const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />
}

function App() {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/protected'}>Protected Page</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
      </nav>

      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/protected' element={<ProtectedPage />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
