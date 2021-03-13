import Header from "./containers/Header";
import MidSection from "./containers/MidSection";
import Reviews from "./containers/Reviews";
import Blog from "./containers/Blog";
import Subscribe from "./containers/Subscribe";
import JoinUs from "./containers/JoinUs";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MidSection />
      <Reviews />
      <Blog />
      <Subscribe />
      <JoinUs />
    </div>
  );
}

export default App;
