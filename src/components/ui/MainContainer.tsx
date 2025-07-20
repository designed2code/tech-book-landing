import image1 from "../../assets/mainImg1.png";
let icon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="26"
      height="26"
      rx="3"
      stroke="#385159"
      stroke-width="2"
    />
    <path
      d="M19.06 6.80005L20.36 9.00005C18.1 10.06 16.44 11.54 15.4 13.46C14.38 15.36 13.84 17.88 13.8 21H11.2C10.9 18.38 9.5 16.44 6.8 15.72L7.72 13.28C8.76 13.6 9.68 14.16 10.48 14.98C11.3 15.8 11.84 16.72 12.12 17.76C12.58 12.9 14.92 9.12005 19.06 6.80005Z"
      fill="#385159"
    />
  </svg>
);

export const MainContainer = () => {
  const data = [
    {
      id: 1,
      icon: icon,
      text: "Monthly curated tech reads selected by industry experts",
    },
    {
      id: 2,
      icon: icon,
      text: "Virtual and in-person meetups for deep-dive discussions",
    },
    {
      id: 3,
      icon: icon,
      text: "Early access to new tech book releases",
    },
    {
      id: 4,
      icon: icon,
      text: "Author Q&A sessions with tech thought leaders",
    },
  ];
  return (
    <>
      <div className="main-container-1">
        <div className="left-main-container">
          <img className="image1" src={image1} alt="" />
        </div>
        <div className="right-main-container">
          <div className="right-main-txt-container">
            <h1 className="main-container-heading">
              Read together, grow together
            </h1>
            <div className="mt-[34px]">
              {data.map((item, index) => (
                <div
                  className="flex items-center hero-desc mt-[24px] bullet-points"
                  key={index}
                >
                  <span className="mr-[14px]">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
