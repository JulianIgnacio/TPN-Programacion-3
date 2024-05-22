import Header from "../Components/header"
import Main from "../Components/main";
import Footer from "../Components/footer";


const Home = (props) => {
    return(
        <>
        <Header Alumno={props.alumno}></Header>
        <Main></Main>
        <Footer></Footer>
        </>
    )
}

export default Home;