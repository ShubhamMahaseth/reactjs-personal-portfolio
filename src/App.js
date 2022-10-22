import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Footer />
      <Contact />
    </>
  );
}

export default App;
