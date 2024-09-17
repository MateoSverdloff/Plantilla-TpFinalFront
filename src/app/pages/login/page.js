"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { username, password });
    router.push('./events');
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <div className="social">
          <div className="go" onClick={() => router.push('./register')}>
            Register
          </div>
        </div>
      </form>
    </div>
  );
}
