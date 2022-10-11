import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import RomanticComedy from "./components/RomanticComedy";

import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* intro section*/}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro */}

      {/* trending section */}
      <div className="trending"></div>
      <Trending />
      {/* end trending */}

      {/* romantic comedy section */}
      <RomanticComedy />
      {/* romantic comedy end */}
    </div>
  );
}

export default App;
