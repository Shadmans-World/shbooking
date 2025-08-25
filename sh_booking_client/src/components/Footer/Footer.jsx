import React from 'react'
import moment from 'moment'
export default function Footer() {
  return (
    <div className="h-16 w-full bg-base-200  flex items-center justify-center font-bold mt-2 p-2 ">
      <p className='text-center'>&copy; {moment().format("YYYY")} SHBooking. All rights reserved.</p>
    </div>
  )
}
