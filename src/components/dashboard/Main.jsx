import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { MdHeadphones } from "react-icons/md";
import { VscCoffee } from "react-icons/vsc";


const Main = () => {
    return (

        <div className='mainClass d-flex align-items-center'>
            <div className="container">
                <div className="text-left text-light">
                    <h1 className="display-4 fw-bold ">Level Up Your</h1>
                    <h1 className="display-4 fw-bold">Gaming Experience</h1>
                    <p className="lead">
                        Premium gaming setups, accessories, and a vibrant gaming cafe community.
                    </p>
                </div>

                <div className="mt-4 d-flex gap-3">
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <FaComputer />
                        Rent Setup
                    </button>
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <MdHeadphones />
                        Buy Accessories
                    </button>
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <VscCoffee />
                        Visit Cafe
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Main