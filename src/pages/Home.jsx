import Header from "../Components/header"
import Main from "../Components/main";
import Footer from "../Components/footer";


const Home = (props) => {
    return(
        <>
        <Header Alumno={props.alumno}></Header>
        <Main Alumno={props.alumno}></Main>
        <Footer Alumno={props.alumno}></Footer>
        </>
    )
}

export default Home;