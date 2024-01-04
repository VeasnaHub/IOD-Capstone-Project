import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import useBookingRequests from "../hooks/useBookingRequests";

function BookingRequestList () {

    const { currentUser } = useUserContext();
    const { bookingRequests, message, fetchData } = useBookingRequests(currentUser);

    useEffect(() => {
        fetchData();
    }, []);

    const handleConfirm = async (bookingId) => {
        try {
            await axios.put(`/api/bookings/${bookingId}`, {
                status: 'Confirmed',
            });
            fetchData();
        } catch (error) {
            console.error(err.message);
        }
    };

    const handleDecline = async (bookingId) => {
        try {
            await axios.put(`/api/bookings/${bookingId}`, {
                status: 'Declined',
            });
            fetchData();
        } catch (error) {
            console.error(err.message);
        }
    };

    return (
        <div className="BookingRequestList in-body">
            {bookingRequests.length === 0 ? (
                <p>You have no booking requests!</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Booking #</th>
                                <th>Trip #</th>
                                <th>Departure</th>
                                <th>Destination</th>
                                <th>Service Day</th>
                                <th>Time</th>
                                <th>Requested Seats</th>
                                <th>Unit Price</th>
                                <th>Status</th>
                                <th className="action-column">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingRequests.map((bookingRequest) => (
                                <tr key={bookingRequest.id}>
                                    <td>{bookingRequest.id}</td>
                                    <td>{bookingRequest.tripId}</td>
                                    <td>{bookingRequest.trip.departure}</td>
                                    <td>{bookingRequest.trip.destination}</td>
                                    <td>{bookingRequest.trip.serviceDay}</td>
                                    <td>{bookingRequest.trip.departureTime}</td>
                                    <td>{bookingRequest.requestedSeat}</td>
                                    <td>{bookingRequest.trip.unitPrice}</td>
                                    <td>{bookingRequest.status}</td>
                                    <td className="action-column">
                                        <button className="green-button" onClick={() => handleConfirm(bookingRequest.id)}>Confirm</button>
                                        <button className="yellow-button" onClick={() => handleDecline(bookingRequest.id)}>Decline</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default BookingRequestList;