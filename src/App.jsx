import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <div id="home">
            {" "}
            <Hero />{" "}
          </div>

          <div id="about-me">
            <About />
          </div>
          <div id="services">
            {" "}
            <Services />{" "}
          </div>
          <div id="contact">
            {" "}
            <Contact />{" "}
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
