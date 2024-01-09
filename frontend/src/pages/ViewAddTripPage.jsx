import AddTripDialog from "../components/AddTripDialog";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";
import useOfferedTrips from "../hooks/useOfferedTrip";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import OfferedTripList from "../components/OfferedTripList";

function ViewAddTripPage(props) {
  const { currentUser } = useUserContext();

  const { offeredTrips, message, fetchData } = useOfferedTrips(currentUser);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(offeredTrips);

  return (
    <div className="ViewAddTripPage">
      <LoggedNavBar />
      <DashBoardTitle title="YOUR OFFERED TRIPS" />
      <AddTripDialog />
      <OfferedTripList offeredTrips={offeredTrips} />
      <Footer />
    </div>
  );
}

export default ViewAddTripPage;
