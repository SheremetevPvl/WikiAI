import "./Menu.css"
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <div className="menu">
            <div className="menuPanel">
                <nav>
                    <Link to ="/" className="buttonPanel">Главная</Link>
                    <Link to ="/storage" className="buttonPanel">Хранилище</Link>
                    <Link to ="/my_storage" className="buttonPanel">Моё хранилище</Link>
                    <Link to = "/redact_state" className="buttonPanel">Написать статью</Link>
                    <Link to ="/LLM_search" className="buttonPanel lastbutton">Поиск по LLM</Link>
                </nav>
            </div>
            <div className="menuAuthorization">
                <a href="#" className="buttonAuthorization left">Log In</a>
                <a href="#" className="buttonAuthorization right">Sign Up</a>
            </div>
        </div>
    );
}

export default Menu;