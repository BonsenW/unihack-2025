import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"

function App() {
    return (
        <>
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