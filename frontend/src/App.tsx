import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";


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