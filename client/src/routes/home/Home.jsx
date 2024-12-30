import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Services from "../../components/services/Services"
import Footer from "../../components/footer/Footer";
import Comments from "../../components/comments/Comments";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
       <Nav/>
       <Hero/>
       <Comments/>
       <Services/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home