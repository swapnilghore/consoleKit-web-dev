import Nav from '../Nav';
import { FaStar, FaStarHalfAlt, FaRegHeart, FaShareAlt, FaTruck, FaMoneyBillWave, FaPumpSoap } from 'react-icons/fa';
import Footer from '../../Footer';

const RentalDetailPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log("Parsed user:", parsedUser);
            setUser(parsedUser);
        }
    }, []);
    return (
        <>
            <Nav user={user} />

            <div className="container pt-5 pb-3">
                <div className="row">
                    {/* Left Image Section */}
                    <div className="col-md-6 text-center">
                        <img
                            src="https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg"
                            alt="Xbox Controller"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "350px" }}
                        />
                        <div className="d-flex justify-content-center gap-3">
                            <img src="https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg" alt="thumb1" width={80} />
                            <img src="https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg" alt="thumb2" width={80} />
                            <img src="https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg" alt="thumb3" width={80} />
                        </div>
                    </div>

                    {/* Right Product Info Section */}
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h4>Xbox X/S Wireless Controller Robot White</h4>
                                <div className="d-flex align-items-center mb-2">
                                    {[...Array(4)].map((_, i) => (
                                        <FaStar key={i} color="#ffc107" />
                                    ))}
                                    <FaStarHalfAlt color="#ffc107" />
                                    <span className="ms-2 fw-semibold">4.5</span>
                                </div>
                                <p className="text-muted mb-1">
                                    <strong>Compatible With:</strong> Xbox Series X | Xbox Series S | Xbox One | Windows 10/11 PCs | Android | iOS
                                </p>
                            </div>
                            <div className="d-flex flex-column align-items-center gap-2">
                                <FaRegHeart size={22} />
                                <FaShareAlt size={22} />
                            </div>
                        </div>

                        <div className="bg-light p-3 rounded mt-3">
                            <div className="d-flex justify-content-between fw-semibold mb-2">
                                <div>Per Day<br /><span className="text-primary fs-5">$49.99</span></div>
                                <div>Per Week<br /><span className="fs-5 text-primary">$299.99</span></div>
                            </div>
                            <div className="d-flex gap-2 mb-2">
                                <input type="date" className="form-control" />
                                <input type="date" className="form-control" />
                            </div>
                            <button className="btn btn-primary w-100">Book Now</button>
                        </div>

                        <div className="mt-4">
                            <h5>Key Features</h5>
                            <ul className="list-unstyled row">
                                {[
                                    "4K Gaming Monitor",
                                    "Wireless smooth connectivity",
                                    "Customizable Controls",
                                    "Battery Life Upto 4hours",
                                    "Hybrid D-Pad",
                                    "3.5mm Audio Jack"
                                ].map((feature, idx) => (
                                    <li key={idx} className="col-6 mb-2">
                                        ✅ {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="border rounded shadow-sm p-4">
                    <h5 className="fw-bold mb-4">Technical Specifications</h5>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <small className="text-muted">Dimensions</small><br />
                            <strong>260mm(L) x 150mm(H) x 260mm(W)</strong>
                        </div>
                        <div className="col-md-6">
                            <small className="text-muted">Power Source</small><br />
                            <strong>Battery Powered (AA Batteries)</strong>
                        </div>
                    </div>

                    <hr className="my-3" />

                    <div className="row">
                        <div className="col-md-6">
                            <small className="text-muted">Operating System Compatibility</small><br />
                            <strong>Windows 10</strong>
                        </div>
                        <div className="col-md-6">
                            <small className="text-muted">Country</small><br />
                            <strong>India</strong>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-4">
                <h5 className="fw-bold mb-4">Delivery Options</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="border rounded shadow-sm p-3 h-100">
                            <div className="d-flex align-items-center mb-2">
                                <FaTruck className="text-primary fs-4 me-2" />
                                <strong>Home Delivery</strong>
                            </div>
                            <p className="mb-0 text-muted">Free delivery within city limits</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="border rounded shadow-sm p-3 h-100">
                            <div className="d-flex align-items-center mb-2">
                                <FaMoneyBillWave className="text-primary fs-4 me-2" />
                                <strong>Cash on Delivery</strong>
                            </div>
                            <p className="mb-0 text-muted">Pay when you receive</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="border rounded shadow-sm p-3 h-100">
                            <div className="d-flex align-items-center mb-2">
                                <FaPumpSoap className="text-primary fs-4 me-2" />
                                <strong>Sanitized Equipment</strong>
                            </div>
                            <p className="mb-0 text-muted">100% sanitized before delivery</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                {/* Customer Reviews */}
                <h5 className="fw-bold mb-4">Customer Reviews</h5>
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="border rounded shadow-sm p-3 h-100">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                    alt="John"
                                />
                                <div>
                                    <strong>John Cooper</strong>
                                    <div className="text-warning">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={14} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="mb-0 text-muted">
                                Amazing setup! The monitor quality is outstanding and the chair is super
                                comfortable. Definitely worth renting!
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="border rounded shadow-sm p-3 h-100">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                    alt="Sarah"
                                />
                                <div>
                                    <strong>Sarah Williams</strong>
                                    <div className="text-warning">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} size={14} />
                                        ))}
                                        <FaStarHalfAlt size={14} />
                                    </div>
                                </div>
                            </div>
                            <p className="mb-0 text-muted">
                                Great experience overall. The delivery was prompt and setup was
                                hassle-free. Would rent again!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Setup Instructions */}
                <div className="border rounded shadow-sm p-4">
                    <h5 className="fw-bold mb-4">Setup Instructions</h5>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        {[
                            "Unbox all components carefully",
                            "Connect monitor to power and PC",
                            "Connect all peripherals",
                            "Power on the system",
                            "Configure display settings",
                            "Start gaming!",
                        ].map((step, index) => (
                            <div className="d-flex align-items-start" key={index}>
                                <div
                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{ width: "30px", height: "30px" }}
                                >
                                    {index + 1}
                                </div>
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default RentalDetailPage