import BookingPage from '@/components/Booking'
import React, { Suspense } from 'react'

const Bookingpage = () => {
  return (
    <Suspense fallback={<div className="text-center p-10 text-white">Loading booking details...</div>}>
      <BookingPage/>
    </Suspense>
  )
}

export default Bookingpage