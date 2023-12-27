
function OfferedTripBody() {
    return (
        <div className="OfferedTripBody in-body">
            <table>
                <thead>
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
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>Flat Bush</td>
                        <td>Auckland CBD</td>
                        <td></td>
                        <td>08:00</td>
                        <td>4</td>
                        <td>10$</td>
                        <td>Active</td>
                        <td className="action-column">
                            <button className="green-button">Edit Trip</button>
                            <button className="yellow-button">Delete Trip</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default OfferedTripBody;