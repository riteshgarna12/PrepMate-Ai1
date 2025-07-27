import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';

const DashboardLayout = ({ children, onAddSession }) => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] min-h-screen relative overflow-hidden">
      <Navbar onAddSession={onAddSession} />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
