import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Advantages from "./components/Advantages";
import Partners from "./components/Partners";
import Carousel from "./components/Carousel";
import Shelf from "./components/Shelf";
import InfoCard from "./components/InfoCard";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Carousel />
      <Advantages />
      <Partners />
      <Shelf />
      <InfoCard />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
