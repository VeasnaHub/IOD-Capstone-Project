import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import useBookings from "../hooks/useBookings";


function BookingList() {
    const { currentUser } = useUserContext();
    const { bookings, message, fetchData } = useBookings(currentUser);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="BookingList in-body">
            <table>
                <thead>
                    <tr>
                        <th>Booking #</th>
                        <th>Trip #</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Service Day</th>
                        <th>Time</th>
                        <th>Seats</th>
                        <th>Unit Price</th>
                        <th>Status</th>
                        <th className="action-column">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="action-column">
                            <button className="yellow-button">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookingList;