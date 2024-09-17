"use client"

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = ({ user }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
      {isLoggedIn && (
        <div className="user-info">
          <img src="/path-to-user-icon.svg" alt="User Icon" className="user-icon" />
          <span className="user-name">{user.name}</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
