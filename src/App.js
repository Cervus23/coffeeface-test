import Header from "./containers/Header";
import MidSection from "./containers/MidSection";
import Reviews from "./containers/Reviews";
import Blog from "./containers/Blog";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MidSection />
      <Reviews />
      <Blog />
    </div>
  );
}

export default App;
