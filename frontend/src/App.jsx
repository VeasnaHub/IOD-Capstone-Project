import './App.css'
import AddTripCard from './components/AddTripCard.jsx';
import { UserProvider } from './context/UserContext.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    {/* <AddTripCard /> */}
    </>
  )
}

export default App;
