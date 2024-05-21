import FotoPersonal from "../assets/FotoPersonal.jpg"
import '../css/header.css'

const Header = () => {
    return (
        <>
        <div className="header">
            <img src={FotoPersonal} alt="Foto Personal" />
            <h1>Julian Ignacio Montenegro</h1>
        </div>
        </>
    )
}

export default Header;