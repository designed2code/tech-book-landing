import { Button } from "@/components/ui/button";
import { Navbar } from "./components/ui/Navbar";
import { Main } from "./components/ui/Main";
import { MainContainer } from "./components/ui/MainContainer";
import { MainContainer2 } from "./components/ui/MainContainer2";
import { ReadingJourney } from "./components/ui/ReadingJourney";
import { Membership } from "./components/ui/Membership";
import { Testimonial } from "./components/ui/Testimonial";

function App() {
  return (
    <>
      <div className="hero">
        <div className="main-container">
          <Navbar />
          <Main />
          <MainContainer />
          <MainContainer2 />
          <ReadingJourney />
          {/* <Membership /> */}
          <Testimonial />
        </div>
      </div>
    </>
  );
}

export default App;
