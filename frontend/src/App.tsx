import { Routes, Route } from "react-router-dom";
import LandingPageNavBar from "./components/custom/LandingPageNavBar";

function App() {
    return (
        <>
            <LandingPageNavBar />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
        </>
    );
}



export default App;
