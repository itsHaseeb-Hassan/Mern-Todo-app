import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import { useSelector } from 'react-redux';
import TodoScreen from './pages/TodoScreen';

function App() {
  const loginInfo = useSelector(state => state.user.loginInfo);
  const accessToken = loginInfo?.accessToken;
  console.log("accessToken", accessToken,
  )
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/todos');
    }
  }, [ accessToken, navigate]);

  return (
    <div className="bg-blue-300 w-full h-[100vh]">
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
        {accessToken && <Route path='/todos' element={<TodoScreen />} />}
      </Routes>
    </div>
  );
}

export default App;

