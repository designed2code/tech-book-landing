import image2 from "../../assets/mainImg2.png";
import { TechLogos } from "./TechLogos";

export const MainContainer2 = () => {
  return (
    <>
      <div className="main-container-2">
        <TechLogos />
        <div className="left-main-container-2">
          <div className="main-container-2-txt-container">
            <h1 className="main-container-heading">
              Not your average book club
            </h1>
            <p className="hero-desc main-container-2-desc">
              <svg
                className="cirlce-highlight"
                width="160"
                height="66"
                viewBox="0 0 160 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5806 28.2455C47.0223 4.77871 92.5762 0.551939 123.043 4.00847C136.803 5.56949 149.522 9.04626 154.265 16.5322C158.345 22.9664 155.522 32.9238 144.8 41.6261C131.288 52.5946 109.332 57.3529 92.0019 60.1309C75.273 62.8126 59.2229 63.5775 45.0597 62.4643C31.1293 61.3696 17.6811 58.6517 9.71466 53.0361C1.25028 47.0692 0.283452 35.8983 15.8013 25.3462C31.1168 14.9331 53.4193 10.5727 70.8897 8.08558C90.6787 5.26909 109.366 4.47439 126.591 5.42164C128.508 5.52753 130.32 3.46513 128.406 3.36188C109.508 2.33038 88.8807 3.38706 67.0595 6.7812C50.2052 9.4018 29.5305 14.1535 14.6815 23.7918C1.18085 32.5547 -2.43742 42.7614 1.66424 49.6803C6.82298 58.3884 22.6624 62.328 38.4295 64.0727C54.1762 65.8165 72.3877 65.1283 91.5224 62.0708C109.206 59.2443 131.163 54.3199 145.63 43.5169C156.869 35.1228 161.055 25.4248 159.058 18.3179C156.539 9.35399 144.005 4.69791 129.86 2.58509C98.116 -2.1574 47.5595 1.95093 12.5097 27.3357C10.8129 28.5643 12.8664 29.4859 14.5806 28.2455Z"
                  fill="#FEA36F"
                />
              </svg>
              Connect with a community that speaks your language - from Python
              to TypeScript and everything in between. Our discussions blend
              technical depth with practical applications.
            </p>
          </div>
        </div>
        <div className="right-main-container-2">
          <img
            style={{
              marginLeft: "80px",
            }}
            src={image2}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
