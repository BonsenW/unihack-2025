function LandingPage() {
  return (
    <div className='landing-page'>
        <nav className='navbar'>
            <h1>Housemate Finder</h1>
            <div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button className="btn">Sign Up</button></li>
                </ul>
            </div>
            <header className='hero'>
                <h2>Find Your Soul (Room) Mate</h2>
                <p>AI-powered matching to help you find the best roommates.</p>
                <button className="btn">Get Started</button>
            </header>
        </nav>
    </div>
  );
}

export default App;
