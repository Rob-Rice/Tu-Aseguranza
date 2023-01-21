import "./App.css";
import NavbarComponent from "./components/Navbar";
import AboveFold from "./components/above-fold";
import BelowFold from "./components/below-fold";
import ImgText from "./components/imgText";
import Providers from "./components/insurance-providers";
import FormMap from "./components/formMap";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <AboveFold></AboveFold>
      <BelowFold></BelowFold>
      <ImgText></ImgText>
      <Providers></Providers>
      <FormMap></FormMap>
      <Footer></Footer>
    </>
  );
}

export default App;
