import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { ThemeToggle } from '@/components/theme-toggle'; // Import your ThemeToggle component

interface LoginPageProps {
  showThemeSwitcher?: boolean;
}

const LoginPage = ({ showThemeSwitcher = true }: LoginPageProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full relative">
        {/* Left part: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <LoginForm />
          <div className="text-center text-gray-500 text-sm mt-4">
            © Redeemer 2023-2024 All Rights Reserved
          </div>
        </div>
        {/* Right part: Image */}
        <div className="hidden lg:block w-1/2 relative" style={{ height: '100vh' }}>
          <img
            src="/inspiring-login.jpg"
            alt="Inspiring Login"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* Conditionally render ThemeToggle based on showThemeSwitcher prop */}
          {showThemeSwitcher && (
            <div className="fixed bottom-4 left-4 z-10">
              {/* Render your ThemeToggle component */}
              <nav className="flex items-center space-x-1">
                <ThemeToggle />
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
