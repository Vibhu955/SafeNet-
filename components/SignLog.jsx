import React from 'react';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Background from './Background';
import '../components/SignLog.css';

const SignLog = () => {
    const history = useHistory();

    const handleSignUpClick = () => {
        history.push("/signup");
    };

    const handleLogInClick = () => {
        history.push("/login");
    };

    return (
        <>
        <div className='SignLog'>
            <canvas id="canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#111' }}></canvas>
            <div className="centered">
                <main>
                    <Background />
                    <div className="btn">
                        <button className="sign" onClick={handleSignUpClick}>Sign Up</button>
                        <button className="log" onClick={handleLogInClick}>Log in</button>
                    </div>
                </main>
            </div>
            </div>
        </>
    );
};

export default SignLog;


