// LoginPage.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth/LoginPage.css';
import logo from '../../assets/main_logo.png';
import { auth } from "../../firebase-auth";
import { sendPasswordResetEmail } from "firebase/auth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) return toast.error("Please enter your email");

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Reset link sent successfully! Check your email.");
            setEmail("");
            navigate('/login');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-dark">
            <div className="row w-100 login-container">
                <div className="col-md-6 d-none d-md-block p-0">
                    <div className="h-100 w-100 gaming-image" />
                </div>

                <div className="col-md-6 bg-white d-flex flex-column justify-content-center padLoginPage" id='loginPage'>
                    <div className="text-center mb-4">
                        <h3 className="text-primary">
                            <img src={logo} alt="Logo" className='p-0 loginImg' width={250} />
                        </h3>
                        <h2 class="text-xl font-semibold">Forget your password?</h2>
                        <p class="text-secondary text-sm p-0 m-0">Enter the email or phone number</p>
                        <p class="text-secondary text-sm p-0">associated with your account</p>
                    </div>

                    <form onSubmit={handleReset}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control rounded-pill" placeholder="console@gmail.com"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-3 rounded-pill">Send OTP</button>

                        <div className="text-center mb-3">
                            <span className="text-muted">Remember Password? </span>
                            <Link to="/login" className="text-primary">Log In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

