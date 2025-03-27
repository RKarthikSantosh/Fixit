import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongo";
import { deleteBooking } from "@/queries/bookings";
import { createAcceptedBooking } from "@/queries/accepted-bookings";

export const POST = async (request) => {
  try {
    const requestData = await request.json();
    // console.log("🚀 Received Booking Data in API:", requestData);  // ✅ Debugging

    const {
      employeeUsername, employeeEmail, employeePhone,
      customerUsername, customerEmail, customerPhone,
      street, city, state, category, service, date, time
    } = requestData;

    if (!time) {
      console.error("⚠️ Time is missing in API request!");  
      throw new Error("Time is required for booking.");
    }

    await dbConnect();

    await createAcceptedBooking({
      employeeUsername,
      employeeEmail,
      employeePhone,
      customerUsername,
      customerEmail,
      customerPhone,
      street,
      city,
      state,
      category,
      service,
      date: new Date(date),
      time,  // ✅ Ensure time is stored
    });

    // console.log("✅ Stored in Accepted Bookings:", { date, time });  

    await deleteBooking(customerUsername, service, date);

    return NextResponse.json({ message: "Booking accepted and stored with time." }, { status: 201 });
  } catch (err) {
    console.error("❌ Error in accepting booking:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};




