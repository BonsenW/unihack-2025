import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <>
            <ProfilePage></ProfilePage>
            <LandingPage />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
        </>
    );
}

export default App;