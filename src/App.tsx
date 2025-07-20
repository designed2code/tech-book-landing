import { Button } from "@/components/ui/button";
import { Navbar } from "./components/ui/Navbar";
import { Main } from "./components/ui/Main";
import { MainContainer } from "./components/ui/MainContainer";
import { MainContainer2 } from "./components/ui/MainContainer2";

function App() {
  return (
    <>
      <div className="hero">
        <div className="main-container">
          <Navbar />
          <Main />
          <MainContainer />
          <MainContainer2 />
        </div>
      </div>
    </>
  );
}

export default App;
