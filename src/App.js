import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './components/LandingPage';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import UserHomePage from './components/UserHomePage';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <ContactUs /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      <UserHomePage />
    </div>
  );
}

export default App;
