import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address.';
    if (!password) newErrors.password = 'Please enter the password.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      setErrors({ general: error.response?.data?.message || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-8 border border-[#c6e6ea] rounded-2xl bg-white shadow-xl">
      <h3 className="text-xl font-bold text-textMain mb-1">Welcome Back</h3>
      <p className="text-sm text-mutedText mb-6">Please enter your details to log in.</p>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="email"
          error={errors.email}
          
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
          error={errors.password}
        />

        {errors.general && <p className="text-red-500 text-xs">{errors.general}</p>}

        <button type="submit" className="btn-primary w-52 self-center">
          LOGIN
        </button>

        <p className="text-sm text-mutedText text-center">
          Don’t have an account?
          <button
            type="button"
            className="text-accent font-medium underline ml-1"
            onClick={() => setCurrentPage('signup')}
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
