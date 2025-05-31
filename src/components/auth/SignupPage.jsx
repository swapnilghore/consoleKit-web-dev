import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import logo from '../../assets/main_logo.png';
import singUp from '../../assets/login/singUp.png'
import { signInWithGoogle } from "../../firebase-auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase-auth";
import { IoMdEye } from "react-icons/io";


const SignupPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            navigate("/dashboard");
        }
    }, [])

    const loginWithGoogle = async () => {
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
            console.log(error);
            toast.error('Login failed. Please try again...');
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Submit clicked");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name,
            });

            localStorage.setItem(
                "user",
                JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL || null,
                })
            );
            toast.success("Account created successfully!");
            navigate("/login");
        } catch (err) {
            toast.error(err.message);
        }
    };


    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };


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
                            <button className="btn btn-light border rounded-pill" onClick={(e) => loginWithGoogle(e)}>
                                <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="me-2" alt="Google"
                                />
                                Sign up with Google
                            </button>
                            <button className="btn btn-light border rounded-pill" onClick={() => toast.error('Apple Sign-In not working please try another method...')}>
                                <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" className="me-2" alt="Apple"
                                />
                                Sign up with Apple
                            </button>
                        </div>

                        <div className="text-center my-3 text-muted small">
                            — Or continue with email —
                        </div>

                        <form onSubmit={handleSignUp}>
                            <div className="mb-3">
                                <label className="form-label">Your full name</label>
                                <input type="text" className="form-control rounded-pill" placeholder="Anjali Pandey"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control rounded-pill" placeholder="console@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3 position-relative">
                                <label className="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="form-control rounded-pill" placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <span className="position-absolute end-0 top-50 translate-middle-y me-3 fs-4 text-muted" style={{ cursor: "pointer", marginTop: "12px" }} onClick={() => togglePassword(!showPassword)}
                                ><IoMdEye />
                                </span>
                            </div>

                            <div className="mb-4 position-relative">
                                <label className="form-label">Confirm password</label>
                                <input type={showConfirmPassword ? "text" : "password"} className="form-control rounded-pill" placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <span className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted fs-4" style={{ cursor: "pointer", marginTop: "12px" }} onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                ><IoMdEye />
                                </span>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-3 rounded-pill">Sign up</button>
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
