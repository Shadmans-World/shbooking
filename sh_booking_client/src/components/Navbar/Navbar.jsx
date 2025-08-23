import React from 'react'

export default function Navbar() {
  return (
    <div className="  h-16 border-2 rounded-xl text-black flex items-center justify-between font-bold">
      <div className="flex-1">
        <p>ShBooking</p>
      </div>
      <div className="flex-1 text-center">
        <p>Middle</p>
      </div>
      <div className="flex-1 text-right">
        <p>End</p>
      </div>
    </div>
  )
}