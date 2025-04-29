import "./RegisterView.css";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

function RegisterView() {
    return (
        <div className="register-container">
            <Header />
            <div className="form-container">
                <h2>Create an Account</h2>
                <form action="#" method="POST">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />

                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterView;