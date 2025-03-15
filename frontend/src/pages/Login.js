import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-card">
        <button className="back-btn">Back</button>
        <h4>Housemate</h4>
        <h2>Login</h2>
        <p>Access your account</p>
        
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        
        <button className="login-btn">Login</button>
      </div>

      <div className="login-footer">
        <p>Find your connection</p>
        <p>New here? <a href="#">Join Now</a></p>
      </div>
    </div>
  );
}

export default Login;
