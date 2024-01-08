import { useEffect, useState } from "react";
import axios from "axios";

const useBookingRequests = (userId) => {
  const [bookingRequests, setBookingRequests] = useState([]);
  const [message, setMessage] = useState("");
  const headers = { "x-access-token": userId.token };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/bookings/bookingsbydriverid?driverId=${userId.id}`,
        { headers: headers }
      );
      setBookingRequests(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      setMessage(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId.id]);

  return { bookingRequests, message, fetchData };
};

export default useBookingRequests;
