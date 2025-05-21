import React from 'react'
import gamingImage from '../../assets/home-img/home_hero.png'

const HeroComp = () => {
    return (
        <div>
            <div className="container-fluid px-0 experience-section">
                <div className="row g-0">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 bg-lightblue text-start">
                        <h1 className="fw-bold display-5">Level Up Your</h1>
                        <h1 className="fw-bold display-5 text-primary">Gaming Experience</h1>
                        <p className="text-muted mt-3">
                            Premium gaming setups, accessories, and a unique gaming café experience
                        </p>
                        <div className="mt-4 d-flex gap-3 flex-wrap">
                            <button className="btn btn-outline-primary px-4 py-2">Rent Setup</button>
                            <button className="btn btn-outline-primary px-4 py-2">Buy Accessories</button>
                            <button className="btn btn-outline-primary px-4 py-2">Visit Café</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={gamingImage} alt="Gaming" className="img-fluid w-100 h-100 object-fit-cover" style={{ maxHeight: '100vh' }}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroComp