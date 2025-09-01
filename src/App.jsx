import React, { useState } from 'react';
import { Eye, EyeOff, Calendar, User, Mail } from 'lucide-react';
import logo from '../public/logo.svg';
import background from "../public/background.png";
import Dashboard from "../public/dashboard";   // ✅ external Dashboard
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AuthScreens = () => {
  const [currentScreen, setCurrentScreen] = useState('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [formData, setFormData] = useState({
    name: 'Jonas Khanwald',
    dob: '11 December 1997',
    email: 'jonas_kahnwald@gmail.com',
    phone: '',
    otp: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // -------------------- SIGN UP SCREEN --------------------
  const SignUpScreen = () => (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
        <p className="text-gray-600">Sign up to enjoy the feature of HD</p>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* DOB with Calendar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <div className="relative">
            <Calendar
              onClick={() => setShowCalendar(!showCalendar)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
            />
            <input
              type="text"
              value={selectedDate ? selectedDate.toDateString() : formData.dob}
              readOnly
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="DD Month YYYY"
            />
            {showCalendar && (
              <div className="absolute left-0 mt-2 z-50 bg-white shadow-lg rounded-lg">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setFormData(prev => ({ ...prev, dob: date.toDateString() }));
                    setShowCalendar(false);
                  }}
                  inline
                />
              </div>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* OTP */}
        {showOTP && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">OTP</label>
            <div className="relative">
              <input
                type="text"
                value={formData.otp}
                onChange={(e) => handleInputChange('otp', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-center text-2xl tracking-widest"
                placeholder="000000"
                maxLength="6"
              />
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (!showOTP) {
              setShowOTP(true);
            } else {
              setCurrentScreen('dashboard');
            }
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          {showOTP ? 'Sign up' : 'Get OTP'}
        </button>
      </div>

      <div className="text-center">
        <span className="text-gray-600">Already have an account? </span>
        <button
          onClick={() => setCurrentScreen('signin')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Sign in
        </button>
      </div>
    </div>
  );

  // -------------------- SIGN IN SCREEN --------------------
  const SignInScreen = () => (
    <div className="w-full max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
      <p className="text-gray-600"> Please login to continue to your account.</p>

      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <button className="text-sm text-blue-600 hover:text-blue-700">Forgot password?</button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Sign in
        </button>
      </div>
    </div>
  );

  // -------------------- OTP SCREEN --------------------
  const OTPScreen = () => (
    <div className="w-full max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Verify OTP</h1>
      <p className="text-gray-600">Enter the verification code sent to your email</p>

      <div className="space-y-4">
        <input
          type="text"
          value={formData.otp}
          onChange={(e) => handleInputChange('otp', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest"
          placeholder="000000"
          maxLength="6"
        />
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Verify & Continue
        </button>
      </div>
    </div>
  );

  // -------------------- MAIN RETURN --------------------
  return (
    <div className="min-h-screen relative">
      {/* Header with logo */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
        <img src={logo} alt="icon" className="w-8 h-8 object-contain" />
        <span className="text-black text-2xl font-semibold">HD</span>
      </div>

      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-2xl backdrop-blur-sm bg-opacity-95">
              {currentScreen === 'signup' && <SignUpScreen />}
              {currentScreen === 'signin' && <SignInScreen />}
              {currentScreen === 'otp' && <OTPScreen />}
              {currentScreen === 'dashboard' && (
                <Dashboard
                  name={formData.name}
                  email={formData.email}
                  dob={formData.dob}
                  selectedDate={selectedDate}
                  onSignOut={() => setCurrentScreen('signup')}
                />
              )}
            </div>
          </div>
        </div>

        {/* Right side background */}
        <div className="flex-1 hidden md:block p-3">
          <img src={background} alt="background" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AuthScreens;
