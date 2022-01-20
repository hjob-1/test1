import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Testimonials />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
