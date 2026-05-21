


"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Link } from "@heroui/react";
import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Navber = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSingOut = async () => {
    await authClient.signOut();
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tutors", label: "Tutors" },
    { href: "/add-tutor", label: "Add Tutor" },
    { href: "/my-tutor", label: "My Tutors" },
    { href: "/my-session", label: "My Booked Sessions" },
  ];

  return (
    <nav className="w-11/12 mx-auto py-4">

      {/* Top bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">🎓</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-purple-600">MediQueue</h1>
            <p className="text-xs text-gray-500 hidden sm:block">Tutor Booking System</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm hover:text-purple-600 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {user ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image referrerPolicy="no-referrer" alt="User" src={user?.image} />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleSingOut}
                variant="danger"
                className="rounded-xl hidden sm:flex"
                size="sm"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <button className="px-4 py-2 border rounded-xl text-sm hover:bg-gray-100 transition">Login</button>
              </Link>
              <Link href="/singup">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm hover:bg-purple-700 transition">Register</button>
              </Link>
            </div>
          )}

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden p-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <ul className="flex flex-col">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors border-b border-gray-50 dark:border-gray-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile auth buttons */}
          <div className="px-5 py-4">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <Avatar.Image referrerPolicy="no-referrer" alt="User" src={user?.image} />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <Button onClick={handleSingOut} variant="danger" className="rounded-xl" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/login" className="flex-1" onClick={() => setMenuOpen(false)}>
                  <button className="w-full px-4 py-2 border rounded-xl text-sm hover:bg-gray-100 transition">Login</button>
                </Link>
                <Link href="/singup" className="flex-1" onClick={() => setMenuOpen(false)}>
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-xl text-sm hover:bg-purple-700 transition">Register</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navber;