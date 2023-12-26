import Button from "./Button";

function BookingRequestBody () {
    return (
        <div className="BookingRequestBody in-body">
            <table>
                <tr>
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
                <tr>
                    <td>001</td>
                    <td>Auckland</td>
                    <td>Flat Bush</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Active</td>
                    <td className="action-column">
                        <Button name="Edit Trip" background="green-button" />
                        <Button name="Cancel" background="yellow-button" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default BookingRequestBody;