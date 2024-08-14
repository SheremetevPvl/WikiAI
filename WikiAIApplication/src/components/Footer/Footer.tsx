import "./Footer.css"
import "../../StyleContainer/Container.css"
import icon from "../../resources/HeaderImg/WikiAI.png"

function Body() {
    return(
        <div className="footer">
            <div className="container">
                    <div className="footerMain">
                        <img src={icon} alt="WikiAI" className="footer_icon" />
                        <div className="footerInfo">
                            <h2 className="infoHeader">Разработчики:</h2>
                            <p className="infoText">
                                Черепов Даниил<br/>
                                Морозов Дмитрий<br/>
                                Шереметьев Павел
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Body;