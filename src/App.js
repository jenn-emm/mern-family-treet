import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './components/LandingPage';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import UserHomePage from './components/UserHomePage';
import AddEditRecipe from './components/AddEditRecipe';
import ViewRecipe from './components/ViewRecipe';
import SideNav from './components/user-pages/SideNav';
import Settings from './components/Settings';
import ViewEditUserProfile from "./components/ViewEditUserProfile"

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <ContactUs /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <UserHomePage /> */}
      {/* <AddEditRecipe /> */}
      {/* <ViewRecipe /> */}
      {/* <Settings /> */}
      <ViewEditUserProfile />
      
    </div>
  );
}

export default App;
