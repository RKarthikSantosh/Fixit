import { Booking } from "@/model/booking-model";

export async function createBooking(booking) {
  try {
    await Booking.create(booking);
  } catch (e) {
    throw new Error(e);
  }
}

export const getBookingsByEmail = async (email, service = null) => {
  if (service) {
    // If user is a worker, fetch bookings where the service matches
    return await Booking.find({ service });
  } else {
    // If user is a customer, fetch bookings they made
    return await Booking.find({ email });
  }
};

export async function deleteBooking(username, service, date) {
  try {
    await Booking.deleteOne({ username, service, date: new Date(date) });
  } catch (e) {
    throw new Error(e);
  }
}