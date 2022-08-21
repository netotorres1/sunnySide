import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Photos from "./Photos/Photos";
import Testimonials from "./Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header/>
      <Cards />
      <Testimonials />
      <Photos/>
      <Footer/>
    </div>
  );
}

export default App;
