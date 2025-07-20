import { Button } from "@/components/ui/button";
import { Navbar } from "./components/ui/Navbar";
import { Main } from "./components/ui/Main";
import { MainContainer } from "./components/ui/MainContainer";

function App() {
  return (
    <>
      <div className="hero">
        <div className="main-container">
          <Navbar />
          <Main />
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
