import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Services from "../../components/services/Services"
import Footer from "../../components/footer/Footer";
import OurCustomerSay from "../../components/what-our-costumer-say/OurCustomerSay";
import Meet from "../../components/meet/Meet";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
       <Nav/>
       <Hero/>
       <OurCustomerSay/>
       <Services/>
       <Meet/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home