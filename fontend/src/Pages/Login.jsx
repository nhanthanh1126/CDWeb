import React from 'react';
import '../css/login.css'
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div>
            <Header />
            <div className="login-container">
                <h2>Login</h2>
                <form action="/login.php" method="POST">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className="form-footer">
                    <p>Do not have an account?
                        <Link to="/register">Register now</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Login;