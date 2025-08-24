import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {

  const link = <>
     <li>
            <NavLink to="#">Academy</NavLink>
          </li>
          <li>
            <NavLink to="#">Club</NavLink>
          </li>
          <li>
            <NavLink to="#">Membership</NavLink>
          </li>
          <li>
            <NavLink to="#">Tournament</NavLink>
          </li>
  </>
  // Load theme from localStorage OR default to "fantasy"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "fantasy"
  )

  // Apply theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  

  return (
    <div className="h-16 border-b-2 rounded-xl flex items-center justify-between font-bold p-2">
      {/* Left: Logo */}
      <div className="flex-1 hidden md:flex">
        <Link to="/" className="text-2xl">
          SHBooking
        </Link>
      </div>

      {/* Center: Menu (Desktop) */}
      <div className="hidden lg:flex flex-1 text-center justify-center">
        <ul className="flex gap-4 items-center">
          {link}
        </ul>
      </div>

      {/* Mobile/Tablet Dropdown */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box w-52 shadow mt-2"
          >
            {link}
          </ul>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex-1 text-right">
        <div className="flex justify-end items-center lg:gap-3 gap-1 md:gap-2">
          <button className="btn btn-soft btn-primary">Login</button>
          <button className="btn btn-soft btn-primary">Register</button>

          {/* Theme Toggle */}
          <label className="toggle cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "night"}
              onChange={() =>
                setTheme(theme === "fantasy" ? "night" : "fantasy")
              }
            />

            {/* Sun icon (fantasy mode) */}
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            {/* Moon icon (dark mode) */}
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  )
}
