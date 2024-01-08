import { useEffect, useState } from "react";
import axios from "axios";

const useTripLists = (userId) => {
  const [tripLists, setTripLists] = useState([]);
  const [message, setMessage] = useState("");
  const headers = { "x-access-token": userId.token };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/trips", { headers: headers });
      setTripLists(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      setMessage(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId.id]);

  return { tripLists, message, fetchData };
};

export default useTripLists;
