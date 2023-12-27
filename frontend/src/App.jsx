import './App.css'
import { UserProvider } from './context/UserContext.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    </>
  )
}

export default App;
