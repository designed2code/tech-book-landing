import { Button } from "@/components/ui/button";
import { Navbar } from "./components/ui/Navbar";
import { Main } from "./components/ui/Main";

function App() {
  return (
    <>
      <div className="hero">
        <div className="main-container">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
