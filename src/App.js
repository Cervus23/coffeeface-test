import Header from "./containers/Header";
import MidSection from "./containers/MidSection";
import Reviews from "./containers/Reviews";
import Blog from "./containers/Blog";
import Subscribe from "./containers/Subscribe";
import JoinUs from "./containers/JoinUs";
import Footer from "./containers/Footer";
import "./App.scss";

function App() {
  const width = window.innerWidth;
  return (
    <div className="App">
      <Header width={width} />
      <MidSection width={width} />
      <Reviews />
      <Blog />
      <Subscribe width={width} />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
