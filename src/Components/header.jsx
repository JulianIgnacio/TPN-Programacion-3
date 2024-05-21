import FotoPersonal from "../assets/FotoPersonal.jpg"

const Header = () => {
    return (
        <>
        <div className="">
            <img src={FotoPersonal} alt="Foto Personal" />
            <h1>Julian Ignacio Montenegro</h1>
        </div>
        </>
    )
}

export default Header;