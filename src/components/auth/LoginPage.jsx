// LoginPage.js
import React from 'react';
import { toast } from 'react-toastify';
import '../css/auth/LoginPage.css'
import logo from '../../assets/main_logo.png';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from "../../firebase-auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const loginWithGoogle = async (e) => {
        try {
            const user = await signInWithGoogle();
            if (user.accessToken) {
                localStorage.setItem("google_access_token", user.accessToken);
            }
            localStorage.setItem("user", JSON.stringify({
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
            }));
            toast.success(`Welcome ${user.displayName}`);
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login failed. Please try again...');
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-dark">
            <div className="row w-100 login-container">
                {/* Left Section - Gaming Image */}
                <div className="col-md-6 d-none d-md-block p-0">
                    <div className="h-100 w-100 gaming-image" />
                </div>

                {/* Right Section - Login Form */}
                <div className="col-md-6 bg-white d-flex flex-column justify-content-center padLoginPage" id='loginPage'>
                    <div className="text-center mb-4">
                        <h3 className="text-primary">
                            <img src={logo} alt="Logo" className='p-0 loginImg' width={250} />
                        </h3>
                        <h3>Log in to your account</h3>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control rounded-pill" placeholder="console@gmail.com"
                            />
                        </div>

                        <div className="mb-2 position-relative">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control rounded-pill" placeholder="Password"
                            />
                            <small className="d-block text-end mt-1">
                                <Link to="/forgot" className="text-decoration-none text-dark">Forgot password</Link>
                            </small>
                        </div>

                        <button className="btn btn-primary w-100 mb-3 rounded-pill">Login</button>

                        <div className="text-center mb-3">
                            <span className="text-muted">You're new? </span>
                            <Link to="/signup" className="text-primary">Sign In</Link>
                        </div>

                        <div className="text-center text-muted mb-2">Or with others</div>

                        <button type='button' className="btn btn-light w-100 mb-2 border rounded-pill" onClick={(e) => loginWithGoogle(e)}>
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
                            Sign up with Google
                        </button>

                        <button className="btn btn-light w-100 border rounded-pill" onClick={() => alert("Apple Sign-In not working please try another method...")}>
                            <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" alt="Apple" className="me-2" />
                            Sign up with Apple
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

