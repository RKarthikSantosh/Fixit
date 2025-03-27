import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  username: { required: true, type: String },
  email: { required: true, type: String },
  phone: { required: true, type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  service: { type: String },
  date: { type: Date, required: true }, // Ensure date is required
  time: { type: String, required: true }, // New field for time
});

export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);