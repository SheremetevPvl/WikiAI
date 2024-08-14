import "./Header.css"
import "../../StyleContainer/Container.css"
import Menu from "../Menu/Menu"
import icon from "../../resources/HeaderImg/WikiAI.png"

function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className="headerMain">
                    <img src={icon} alt="WikiAI" className="header_icon"/>

                    <Menu/>
                </div>
            </div>
        </div>
    );
}

export default Header;