import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div class="login">
            <form>
                <label className="username"> Username:</label>
                <input type = "text"></input>
                <label>Password:</label>
                <input type = "password"></input>
                <input class = "login-button" type = "button" value = "register"></input>
        </form>
    </div >

    );
}

export default Header;