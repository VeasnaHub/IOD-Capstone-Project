import { useEffect, useState } from "react";
import axios from "axios";

const useBookings = (userId) => {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");
  const headers = { "x-access-token": userId.token };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/bookings/bookingsbypassengerid?passengerId=${userId.id}`, { headers: headers });
      setBookings(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      setMessage(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId.id]);

  return { bookings, message, fetchData };
};

export default useBookings;
