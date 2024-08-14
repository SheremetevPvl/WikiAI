import "./Menu.css"

function Menu() {
    return(
        <div className="menu">
            <div className="menuPanel">
                <a href="#" className="buttonPanel">Главная</a>
                <a href="#" className="buttonPanel">Хранилище</a>
                <a href="#" className="buttonPanel">Моё хранилище</a>
                <a href="#" className="buttonPanel">Написать статью</a>
                <a href="#" className="buttonPanel lastbutton">Поиск по LLM</a>
            </div>
            <div className="menuAuthorization">
                <a href="#" className="buttonAuthorization left">Log In</a>
                <a href="#" className="buttonAuthorization right">Sign Up</a>
            </div>
        </div>
    );
}

export default Menu;