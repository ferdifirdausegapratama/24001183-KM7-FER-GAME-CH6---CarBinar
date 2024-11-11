import Faq from "../Faq";
import Footer from "../Footer";
import JumboTron from "../JumboTron";
import Main from "../Main";
import Navbar from "../Navbar";
import OurService from "../OurService";
import Testimonial from "../Testimonial";
import WhyUs from "../WhyUs";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <OurService></OurService>
      <WhyUs></WhyUs>
      <Testimonial></Testimonial>
      <JumboTron></JumboTron>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;
