import { useEffect, useState } from "react";
import axios from "axios";

const useOfferedTrips = (userId) => {
  const [offeredTrips, setOfferedTrips] = useState([]);
  const [message, setMessage] = useState("");
  const headers = { "x-access-token": userId.token };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/trips/tripsbydriverid/${userId.id}`, { headers: headers });
      setOfferedTrips(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      setMessage(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId.id]);

  return { offeredTrips, message, fetchData };
};

export default useOfferedTrips;
