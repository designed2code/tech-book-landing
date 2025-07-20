export const Membership = () => {
  return (
    <>
      <div className="membership-container">
        <h1 className="main-container-heading">Membership options</h1>
        <div className="membership-card-container">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="membership-card">
              <h1>Starter</h1>
              <p>$19 /month</p>
              <hr />
              <FeatureContainer />
              <button className="hero-btn">Subscribe Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const FeatureContainer = () => {
  return (
    <>
      <div className="flex items-center gap-12">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.857143"
            y="0.879116"
            width="22.2857"
            height="22.2857"
            rx="2.57143"
            stroke="#385159"
            stroke-width="1.71429"
          />
          <path
            d="M16.0514 5.56482L17.1657 7.45053C15.2286 8.3591 13.8057 9.62768 12.9143 11.2734C12.04 12.902 11.5772 15.062 11.5429 17.7362H9.31431C9.05716 15.4905 7.85716 13.8277 5.54288 13.2105L6.33145 11.1191C7.22288 11.3934 8.01145 11.8734 8.69716 12.5762C9.40002 13.2791 9.86288 14.0677 10.1029 14.9591C10.4972 10.7934 12.5029 7.55339 16.0514 5.56482Z"
            fill="#385159"
          />
        </svg>
        <p>1 book/month</p>
      </div>
      <div className="flex items-center">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.857143"
            y="0.879116"
            width="22.2857"
            height="22.2857"
            rx="2.57143"
            stroke="#385159"
            stroke-width="1.71429"
          />
          <path
            d="M16.0514 5.56482L17.1657 7.45053C15.2286 8.3591 13.8057 9.62768 12.9143 11.2734C12.04 12.902 11.5772 15.062 11.5429 17.7362H9.31431C9.05716 15.4905 7.85716 13.8277 5.54288 13.2105L6.33145 11.1191C7.22288 11.3934 8.01145 11.8734 8.69716 12.5762C9.40002 13.2791 9.86288 14.0677 10.1029 14.9591C10.4972 10.7934 12.5029 7.55339 16.0514 5.56482Z"
            fill="#385159"
          />
        </svg>
        <p>1 book/month</p>
      </div>
    </>
  );
};
