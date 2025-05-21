import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/main_logo.png';
import singUp from '../../assets/login/singUp.png'

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                {/* Left */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                        src={singUp}
                        alt="Signup illustration"
                        className="img-fluid"
                        style={{ maxHeight: "80%", maxWidth: "80%" }}
                    />
                </div>

                {/* Right Signup Form */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div style={{ maxWidth: "400px", width: "100%" }}>
                        <div className="text-center mb-4">
                            <h5 className="text-primary fw-bold mb-3">
                                <img src={logo} alt="Logo" className='p-0' width={250} />
                            </h5>
                            <h4>Create an account</h4>
                        </div>

                        {/* Social buttons */}
                        <div className="d-grid gap-2 mb-3">
                            <button className="btn btn-light border rounded-pill">
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="me-2" alt="Google"
                                />
                                Sign up with Google
                            </button>
                            <button className="btn btn-light border rounded-pill">
                                <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" className="me-2" alt="Apple"
                                />
                                Sign up with Apple
                            </button>
                        </div>

                        <div className="text-center my-3 text-muted small">
                            — Or continue with email —
                        </div>

                        {/* Form */}
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Your full name</label>
                                <input type="text" className="form-control rounded-pill" placeholder="Anjali Pandey"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control rounded-pill" placeholder="console@gmail.com"
                                />
                            </div>

                            <div className="mb-3 position-relative">
                                <label className="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="form-control rounded-pill" placeholder="********"
                                />
                                <span className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}
                                >
                                </span>
                            </div>

                            <div className="mb-4 position-relative">
                                <label className="form-label">Confirm password</label>
                                <input type={showConfirmPassword ? "text" : "password"} className="form-control rounded-pill" placeholder="********"
                                />
                                <span className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" style={{ cursor: "pointer" }} onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                </span>
                            </div>

                            <button className="btn btn-primary w-100 mb-3 rounded-pill">Sign up</button>
                            <div className="text-center small">Already a member? <Link to="/login">Log In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
