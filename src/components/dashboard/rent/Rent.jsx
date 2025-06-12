import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Footer from '../../Footer';
import logo from '../../../assets/only_logo.png';

import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase-firestore";
import Nav from '../Nav';

// const products = [
//     {
//         title: 'Portable Gaming Setup',
//         price: '$29.99/day',
//         image: 'https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg',
//     },
//     {
//         title: 'Dual Monitor Setup',
//         price: '$39.99/day',
//         image: 'https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg',
//     },
//     {
//         title: 'Streaming Bundle',
//         price: '$44.95/day',
//         image: 'https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg',
//     },
//     {
//         title: 'VR Gaming Kit',
//         price: '$34.99/day',
//         image: 'https://ucarecdn.com/b62e4647-7719-4c9e-8460-23086eb15775/-/format/auto/-/preview/750x750/-/quality/lighter/portable-gaming-monitor.jpg',
//     },
// ];

const Rent = () => {
    const navigate = useNavigate();
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const [isRatingOpen, setIsRatingOpen] = useState(false);
    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log("Parsed user:", parsedUser);
            setUser(parsedUser);
        }


        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "rent_products"));
            setproducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("Products updated:", products);
        setLoading(false);
    }, [products]);


    const handledclick = (product_id) => {
        console.log("Product ID clicked:", product_id);
        navigate('/rent-detail/' + product_id);
    }

    return (

        <>
            <Nav user={user} />

            <div className="py-3 px-3 shadow-sm d-flex align-items-center" style={{ position: 'relative', display: 'inline-block' }}>
                <FaSearch style={{ position: 'absolute', top: '50%', left: '27px', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="form-control me-3 rounded-pill bg-body-secondary"
                    style={{ paddingLeft: '30px' }}
                />
            </div>
            {/* Tabs */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-secondary">
                <div className="d-flex flex-row">
                    <ul className="navbar-nav me-auto ms-4 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">Games</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">PlayStation 5</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">PlayStation 4</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">Xbox Series X</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">Xbox One</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">Nintendo Switch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">4K UHD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">Blu-ray</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">Blu-ray</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="#">More Platforms</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <div>
                <div className="container-fluid mt-3">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-md-3 col-lg-2 border-end">
                            <h6 className="fw-bold">Refine Results</h6>

                            <div>

                                {/* PLATFORM FILTER */}
                                <div className="my-3">
                                    <div className="btn btn-sm d-flex justify-content-between w-100 text-start fw-semibold position-relative">
                                        PLATFORM
                                        <span
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsPlatformOpen(!isPlatformOpen);
                                            }}
                                            className="ms-auto"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <FaChevronDown />
                                        </span>
                                    </div>

                                    {isPlatformOpen && (
                                        <ul className="list-unstyled ps-3 mt-2">
                                            <li>
                                                <input type="checkbox" id="pc" /> <label htmlFor="pc">PC</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="ps5" /> <label htmlFor="ps5">PS5</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="xbox" /> <label htmlFor="xbox">Xbox</label>
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                {/* PRICE FILTER */}
                                <div className="my-3">
                                    <div className="btn btn-sm d-flex justify-content-between w-100 text-start fw-semibold position-relative">
                                        PRICE
                                        <span
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsPriceOpen(!isPriceOpen);
                                            }}
                                            className="ms-auto"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <FaChevronDown />
                                        </span>
                                    </div>

                                    {isPriceOpen && (
                                        <div className="mt-2 px-2">
                                            <input
                                                type="number"
                                                className="form-control form-control-sm mb-2"
                                                placeholder="Min"
                                            />
                                            <input
                                                type="number"
                                                className="form-control form-control-sm mb-2"
                                                placeholder="Max"
                                            />
                                            <button className="btn btn-primary btn-sm w-100">Apply</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Genre and Rating */}
                            <div className="my-3">
                                <div className="btn btn-sm d-flex justify-content-between w-100 text-start fw-semibold position-relative">
                                    GENRE
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsGenreOpen(!isGenreOpen);
                                        }}
                                        className="ms-auto"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <FaChevronDown />
                                    </span>
                                </div>

                                {isGenreOpen && (
                                    <ul className="list-unstyled ps-3 mt-2">
                                        <li><input type="checkbox" id="action" /> <label htmlFor="action">Action</label></li>
                                        <li><input type="checkbox" id="rpg" /> <label htmlFor="rpg">RPG</label></li>
                                        <li><input type="checkbox" id="sports" /> <label htmlFor="sports">Sports</label></li>
                                    </ul>
                                )}
                            </div>

                            {/* RATING FILTER */}
                            <div className="my-3">
                                <div className="btn btn-sm d-flex justify-content-between w-100 text-start fw-semibold position-relative">
                                    RATING
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsRatingOpen(!isRatingOpen);
                                        }}
                                        className="ms-auto"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <FaChevronDown />
                                    </span>
                                </div>

                                {isRatingOpen && (
                                    <ul className="list-unstyled ps-3 mt-2">
                                        <li><input type="checkbox" id="4plus" /> <label htmlFor="4plus">4★ & above</label></li>
                                        <li><input type="checkbox" id="3plus" /> <label htmlFor="3plus">3★ & above</label></li>
                                        <li><input type="checkbox" id="2plus" /> <label htmlFor="2plus">2★ & above</label></li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Products Grid */}

                        {loading ? (
                            <div className="loader"><img src={logo} alt="Logo" className='p-2' width={120} />
                                <span></span>
                            </div>
                        ) : (
                            <div className="col-md-6 col-lg-10">
                                <div className="row">
                                    {products?.map((product) => (
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product?.id} onClick={() => handledclick(product?.id)}>
                                            <div className="card h-100 border">
                                                <img
                                                    src={product?.img}
                                                    alt={product?.name || "Product image"}
                                                    className="card-img-top"
                                                    style={{ objectFit: 'cover', height: '200px' }} // Optional: to ensure image consistency
                                                />
                                                <div className="card-body">
                                                    <h6 className="card-title">{product?.name}</h6>
                                                    <p className="card-text text-muted small">${product?.Price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                {/* Pagination */}
                                <nav className="d-flex justify-content-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <button className="page-link">&laquo; Previous</button>
                                        </li>
                                        <li className="page-item active"><button className="page-link">1</button></li>
                                        <li className="page-item"><button className="page-link">2</button></li>
                                        <li className="page-item"><button className="page-link">3</button></li>
                                        <li className="page-item"><button className="page-link">...</button></li>
                                        <li className="page-item"><button className="page-link">7</button></li>
                                        <li className="page-item">
                                            <button className="page-link">Next &raquo;</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )

                        }
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Rent;
