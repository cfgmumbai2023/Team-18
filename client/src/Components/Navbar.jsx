import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Navbar = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user1) => {
            if (user1) {
                setUser(user1);
            }
        });

        return () => {
            unsubscribe(); // Clean up the subscription when the component unmounts
        };
    }, []);

    const navi=useNavigate();
    const logOut=async()=>{
        await signOut(auth)
        navi('/register')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-top" />
                    URMI Foundation
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            {user && <button className="nav-link" onClick={() => logOut}>Sign Out</button>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
