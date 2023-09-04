
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx'
import Dropdown from 'react-bootstrap/Dropdown';
import { Miniglobe, Wood } from './Icons';

const WordpressNavBar = () => {
    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div className='nav-bg position-fixed z-1000 w-100'>
            <Container>
                <div className='d-flex justify-content-between py-4 align-items-center' >
                    <div>
                    </div>
                    <div className='d-md-block d-none'>
                        <div className='d-flex align-items-center gap-4'>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn d-flex align-items-center ' id="dropdown-basic">
                                    <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy'>WordPress Solution</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn d-flex align-items-center' id="dropdown-basic">
                                    <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy'>Services</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy txt'>Portfolio</p>

                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn d-flex align-items-center' id="dropdown-basic">
                                    <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy'>About</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy txt'>Blog</p>

                        </div>
                    </div>

                    <h3 className='position-relative z-3 d-lg-none text-white' onClick={first ? shownav : hidenav}>  {first ? <RxHamburgerMenu /> : <RxCross1 />}  </h3>
                    <ul className={first ? 'd-flex align-items-center gap-5 nav_bar pt-2 ps-0' : "d-flex ps-0 gap-5 nav_bar pt-2 show"} >
                        <div className='d-flex d-md-none flex-column align-items-center gap-4'>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn d-flex align-items-center ' id="dropdown-basic">
                                    <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy'>WordPress Solution</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn d-flex align-items-center' id="dropdown-basic">
                                    <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy'>Services</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy txt'>Portfolio</p>

                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn d-flex align-items-center' id="dropdown-basic">
                                    <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy'>About</p>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <p className='mb-0 fs-16 fw-regular fc-white ff-Gilroy txt crsr'>Blog</p>

                        </div>
                        <li className='pt-2'><Link className='fs-16 ff-Gilroy fw-400 fc-white txt' >1 888 266-6917 (eu?)</Link></li>
                        <li className='pt-2'><Link className='fs-18 ff-Gilroy fc-white fw-600 navBtn'>Contact Us</Link></li>
                        <li className='pt-2'>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdownBtn miniGlobe d-flex align-items-center gap-2' id="dropdown-basic">
                                    <Miniglobe />
                                    <p className='mb-0 ff-Gilroy fc-white fs-16 fw-400 txt'>Eng</p>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Japanese</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>

                </div>

            </Container>
        </div>
    )
}

export default WordpressNavBar
