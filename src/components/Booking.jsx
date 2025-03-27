"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignIn from "@/components/SignIn";

const BookingPage = () => {
    const searchParams = useSearchParams();
    const serviceName = searchParams.get("service");

    const [user, setUser] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState(""); // New state for time
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/user");
                if (!response.ok) throw new Error("Failed to fetch user");
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!user || !selectedDate || !selectedTime) {
            setError("Please select both date and time.");
            return;
        }
    
        // ✅ Log what is being sent
        // console.log("Submitting Booking Data:", {
        //     username: user.username,
        //     email: user.email,
        //     phone: user.phone,
        //     street: user.street,
        //     city: user.city,
        //     state: user.state,
        //     service: serviceName,
        //     date: selectedDate,
        //     time: selectedTime,  // Ensure time is included
        // });
    
        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    street: user.street,
                    city: user.city,
                    state: user.state,
                    service: serviceName,
                    date: selectedDate,
                    time: selectedTime,  // ✅ Ensure time is sent
                }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setError(data.message);
            } else {
                setSuccessMessage("Your booking has been confirmed");
                setTimeout(() => router.push("/"), 3000);
            }
        } catch (error) {
            setError(error.message);
        }
    };
    

    if (loading) return <p className="flex flex-col min-h-screen text-gray-300 bg-gray-800 justify-start items-center p-8"></p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 p-6">
            {user ? (
                user.service ? (
                    <h1 className="text-2xl font-semibold text-red-400 text-center">You cannot book a service</h1>
                ) : (
                    <div className="bg-gray-700 shadow-xl rounded-3xl p-8 w-full max-w-lg text-white">
                        <h2 className="text-3xl text-gray-300 font-semibold text-center mb-6">Book Your Service</h2>
                        <h1 className="text-2xl font-semibold text-center text-gray-400">{serviceName || "No service selected"}</h1>
                        {error && <p className="text-red-400 mt-2 text-sm text-center">{error}</p>}
                        {successMessage && (
                            <p className={`mt-3 text-lg text-center ${successMessage.includes("no worker") ? "text-red-400" : "text-green-400"}`}>{successMessage}</p>
                        )}
                        {!successMessage && (
                            <form onSubmit={handleSubmit} className="mt-6">
                                <label htmlFor="date" className="block font-semibold text-gray-300">Select Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="mt-2 px-3 py-2 rounded w-full bg-gray-600 text-gray-300"
                                    required
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                <label htmlFor="time" className="block font-semibold text-gray-300 mt-4">
                                    Select Time:
                                </label>
                                <input
                                type="time"
                                id="time"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}  // ✅ Ensure time updates state
                                className="mt-2 px-3 py-2 rounded w-full bg-gray-600 text-gray-300"
                                required
                                />
                                <button type="submit" className="mt-10 text-lg bg-gray-500 text-gray-300 px-4 py-2 rounded w-full">
                                    Confirm Booking
                                </button>
                            </form>
                        )}
                    </div>
                )
            ) : (
                <div className="flex-col bg-gray-700 text-gray-300 p-8 rounded-lg shadow-md mb-12">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-300">Sign In</h1>
                    <SignIn />
                </div>
            )}
        </div>
    );
};

export default BookingPage;