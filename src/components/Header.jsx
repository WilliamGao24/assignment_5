import './Header.css'

function Header() {
    return (
        <div className="login">
            <form>
                <label className="username"> Username:</label>
                <input type = "text"></input>
                <label>Password:</label>
                <input type = "password"></input>
                <input className = "login-button" type = "button" value = "Register"></input>
        </form>
    </div >

    );
}

export default Header;