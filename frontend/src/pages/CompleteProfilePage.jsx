import CompleteProfileBody from "../components/CompleteProfileBody";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";

function CompleteProfilePage() {
  return (
    <div className="CompletedProfilePage">
      <LoggedNavBar />
      <CompleteProfileBody />
      <Footer />
    </div>
  );
}

export default CompleteProfilePage;
