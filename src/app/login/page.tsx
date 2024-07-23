"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import bg from '../../../public/auth.png';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await fetch('https://api.mark8.awesomity.rw/auth/login', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.data.accessToken); // Save token to local storage
      // Redirect or handle successful login
      router.push('/products');

    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Error logging in:', error);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
        />
      </div>
      <div className="  max-w-4xl w-full mx-4 p-6 md:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-between p-6 md:p-10 bg-gray-200 rounded-l-lg">
            <img src={`/mark8-logo.png`} alt="Logo" className="w-20 h-20" />
            <div className="text-gray-700">
              <p className="text-4xl font-bold mb-4">Mark8</p>
              <p>By Awesomity Lab</p>
            </div>
            <p className="text-gray-700">2024 Awesomity Lab</p>
          </div>
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col bg-white rounded-r-lg">
            <p className="text-4xl font-bold mb-8">Login</p>
            <form onSubmit={handleLogin}>
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 flex justify-center items-center px-3">
                  <img src={`/mail-01.svg`} alt="mail icon" />
                </div>
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="w-full border border-gray-300 rounded-md pl-10 p-2.5 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 flex justify-center items-center px-3">
                  <img src={`/lock-password.svg`} alt="lock icon" />
                </div>
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md pl-10 p-2.5 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center mt-10">
                <div>
                  <a href="#" className="text-black font-semibold underline hover:no-underline">Forgot Password?</a>
                </div>
                <button type="submit" className="hover:bg-yellow-900 text-black font-semibold rounded-md py-2 px-4 flex items-center" style={{ backgroundColor: '#C1CF16' }}>
                  <p>Login</p>
                  <img src={`/login.svg`} alt="login" className='ml-2' />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white my-4 rounded-xl flex flex-col md:flex-row items-center justify-between p-6">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">New Here?</p>
            <p>Create an account</p>
          </div>
          <button className="border-solid border-2 border-gray-300 text-black font-semibold rounded-md py-2 px-4 flex items-center gap-2">
            <p>Register Here</p>
            <img src={`/arrow-right.svg`} alt="register" className='ml-2' />
          </button>
        </div>
      </div>
    </div>
  );
}
