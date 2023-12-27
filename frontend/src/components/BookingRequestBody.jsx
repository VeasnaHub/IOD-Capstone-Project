import Button from "./Button";

function BookingRequestBody () {
    return (
        <div className="BookingRequestBody in-body">
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
                    <tr>
                        <td>001</td>
                        <td>001</td>
                        <td>Auckland</td>
                        <td>Flat Bush</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Pending</td>
                        <td className="action-column">
                            <Button name="Confirm" background="green-button" />
                            <Button name="Decline" background="yellow-button" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookingRequestBody;