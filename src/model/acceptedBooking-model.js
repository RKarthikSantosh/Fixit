import mongoose, { Schema } from "mongoose";

const AcceptedBookingSchema = new Schema({
  employeeUsername: { type: String, required: true },
  employeeEmail: { type: String, required: true },
  employeePhone: { type: String, required: true },
  customerUsername: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  street: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  service: { type: String, required: false },
  date: { type: Date, required: true },
  time: { type: String, required: true },  // ✅ Ensure time is required
});

// Ensure consistent model name
export const AcceptedBooking =
  mongoose.models.AcceptedBooking || mongoose.model("AcceptedBooking", AcceptedBookingSchema);

