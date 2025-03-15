import './Login.css';

function Login() {
  return (
    <div className='login'>
        <div className='login-card'>
            <button>Back</button>
            <h4>Housemate</h4>
            <h2>Login</h2>
            <p>access to your account</p>
            <input>Username</input>
            <input>Password</input>
            <button>Login</button>
        </div>
        <div className='idk'>
            <p>Find your connection</p>
            <p>New here? <a>Join Now</a></p>
        </div>
    </div>
  );
}

export default App;
