export const ReadingJourney = () => {
  const stepsData = [
    { id: 1, text: "Choose your membership tier" },
    { id: 2, text: "Get your monthly book selection" },
    { id: 3, text: "Join our discussion forums" },
    { id: 4, text: "Attend exclusive meetups" },
  ];
  return (
    <>
      <div className="reading-journey-container">
        <div className="reading-journey-heading-container">
          <h1 className="main-container-heading">Your tech</h1>
          <h1 className="main-container-heading">reading journey</h1>
        </div>
        <div className="step-container">
          {stepsData.map((item, index) => (
            <div key={index} className="number-and-arrow-container">
              <div className="flex items-center justify-between">
                <Number />
                {index !== 3 && <Arrow />}
              </div>
              <div>
                <p className="main-container-heading step-desc">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Number = () => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1.01091"
        width="38"
        height="38"
        rx="3"
        stroke="#062630"
        stroke-width="2"
      />
      <path
        d="M21.708 13.1109V24.9549H25.11V27.5109H15.21V24.9549H19.008V14.6229L19.584 14.9289L15.21 17.7909V14.9109L18.072 13.1109H21.708Z"
        fill="#062630"
      />
    </svg>
  );
};

const Arrow = () => {
  return (
    <svg
      width="80"
      height="33"
      viewBox="0 0 80 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_122_306)">
        <path
          d="M2.5445 21.8194C12.6811 15.2442 40.2741 4.68845 69.5585 15.069"
          stroke="#FEA36F"
          stroke-width="1.55303"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M66.1054 21.6379C68.1021 21.173 70.2358 20.8247 72.2742 20.5856C72.7631 20.5284 77.9447 20.0906 77.8365 19.7783C77.3175 18.2796 76.1184 16.8896 75.3409 15.5119C73.7514 12.6947 72.3586 9.90144 71.535 6.77461C71.1229 5.20951 70.883 3.62435 70.5403 2.06152"
          stroke="#FEA36F"
          stroke-width="1.55303"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_122_306">
          <rect
            width="76.7374"
            height="20.5105"
            fill="white"
            transform="matrix(0.988489 -0.151291 0.157091 0.987584 0 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
