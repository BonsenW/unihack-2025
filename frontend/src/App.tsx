import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfilePreferences from "./pages/ProfilePreferences";
import ChatPage from "./pages/ChatPage";

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
    return (
        <>
             <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/preferences" element={<ProfilePreferences />} />
                <Route path="/notifications" element={<HomePage />} />
                <Route path="/chatpage" element={<ChatPage />} />
                <Route path="/logout" element={<LandingPage />} />
            </Routes>
        </>
    );
}

export default App;