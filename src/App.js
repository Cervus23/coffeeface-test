import Header from "./containers/Header/index";
import MidSection from "./containers/MidSection/index";
import Reviews from "./containers/Reviews";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MidSection />
      <Reviews />
    </div>
  );
}

export default App;
