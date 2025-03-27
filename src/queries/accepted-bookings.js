import { AcceptedBooking } from "@/model/acceptedBooking-model";

export async function createAcceptedBooking(acceptedBooking) {
  try {
    await AcceptedBooking.create(acceptedBooking); // ✅ Time is now stored
  } catch (e) {
    throw new Error(e);
  }
}

export const getAcceptedBookingsByEmail = async (email) => {
  try {
    const bookings = await AcceptedBooking.find({
      $or: [{ employeeEmail: email }, { customerEmail: email }],
    }).lean();
    return bookings;
  } catch (error) {
    console.error("Error fetching accepted bookings:", error);
    return [];
  }
};
