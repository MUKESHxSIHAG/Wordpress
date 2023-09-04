import React, { useEffect, useState } from "react";
import SuccessGuidesimg from "../assets/images/png/SuccessGuidesImg.png";

const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
                >
                    <div className="d-flex justify-content-center align-items-center flex-column text-center">
                        <div className="loader">
                            <span>
                                <img className="wordpressLoader w-75" src={SuccessGuidesimg} alt="Preloader" />
                            </span>
                            <div className="d-flex justify-content-center align-items-center mt-5">
                                <h2 className="ff-Inter fc-primary fs-48 fw-700 ">Wordpress <span className="fc-white">Welcomes You</span> </h2>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloader
