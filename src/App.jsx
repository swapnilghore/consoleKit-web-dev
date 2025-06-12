import Home from './components/home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'
import ForgotPassword from './components/auth/ForgotPassword'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/auth/PrivateRoute'
import Rentals from './components/rentals/Rentals';
import Rent from './components/dashboard/rent/Rent';
import RentalDetailPage from './components/dashboard/rent/RentalDetailPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/rent" element={<PrivateRoute> <Rent /> </PrivateRoute>} />
          <Route path="/rent-detail/:id" element={<PrivateRoute> <RentalDetailPage /> </PrivateRoute>} />
          <Route path="/rentals/*" element={<PrivateRoute> <Rentals /> </PrivateRoute>} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"
        />
      </BrowserRouter>
    </>
  )
}

export default App
