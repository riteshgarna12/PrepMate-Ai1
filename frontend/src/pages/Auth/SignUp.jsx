import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const SignUp = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    education: '',
    goal: '',
    experience: '',
    city: '',
  });
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, education, goal } = formData;  // ✅ FIXED

    if (!name || !email || !password || !education || !goal) {
        setError('Please fill in all required fields.');
        return;
    }

    if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    setError('');
    try {
        const res = await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData);
        const { token } = res.data;
        if (token) {
        localStorage.setItem('token', token);
        updateUser(res.data);
        navigate('/dashboard');
        }
    } catch (err) {
        setError(err.response?.data?.message || 'Something went wrong.');
    }
  };


  return (
    <div className="mx-auto w-full max-w-xl p-6 sm:p-8 bg-white border border-[#c6e6ea] rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-center mb-2">Sign Up</h3>
      <p className="text-sm text-mutedText text-center mb-6">
        Get started by creating your account.
      </p>

      <form
        onSubmit={handleSignUp}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <Input
          value={formData.name}
          onChange={handleChange('name')}
          label="Name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          value={formData.email}
          onChange={handleChange('email')}
          label="Email Address"
          placeholder="john@example.com"
          type="email"
        />
        <Input
          value={formData.password}
          onChange={handleChange('password')}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
        <Input
          value={formData.education}
          onChange={handleChange('education')}
          label="Education"
          placeholder="e.g., B.Tech in CS"
          type="text"
        />
        <Input
          value={formData.goal}
          onChange={handleChange('goal')}
          label="Your Goal"
          placeholder="e.g., GATE, UPSC..."
          type="text"
        />
        <Input
          value={formData.experience}
          onChange={handleChange('experience')}
          label="Experience (optional)"
          placeholder="e.g., 1 year teaching"
          type="text"
        />
        <Input
          value={formData.city}
          onChange={handleChange('city')}
          label="City / Location"
          placeholder="e.g., Bangalore"
          type="text"
        />

        {error && (
          <div className="sm:col-span-2 text-red-500 text-center text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn-primary w-full sm:col-span-2 mt-2"
        >
          CREATE ACCOUNT
        </button>

        <div className="sm:col-span-2 text-center text-sm">
          Already have an account?{' '}
          <button
            type="button"
            className="text-accent font-medium underline"
            onClick={() => setCurrentPage('login')}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
