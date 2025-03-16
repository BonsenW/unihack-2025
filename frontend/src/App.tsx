import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePreferences from "./pages/ProfilePreferences";

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
    return (
        <>
            <ProfilePreferences></ProfilePreferences>
        </>
    );
}

export default App;