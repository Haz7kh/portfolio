import "./App.css";
import { AboutMe, Landing, Navbar, Portfolio, Technologies } from "./screens";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
