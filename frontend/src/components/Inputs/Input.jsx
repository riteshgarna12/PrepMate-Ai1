import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, label, placeholder, type, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-black">{label}</label>
      )}

      <div
        className={`flex items-center px-3 py-2 border rounded-md bg-white ${
          error ? 'border-red-500' : 'border-gray-400'
        }`}
      >
        <input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none text-black placeholder-gray-400"
        />

        {type === 'password' && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-accent cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
