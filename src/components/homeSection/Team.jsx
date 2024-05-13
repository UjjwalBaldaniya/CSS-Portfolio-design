import React from "react";
import teamOne from "../../assets/home/team-1.svg";
import teamTwo from "../../assets/home/team-2.svg";
import teamThree from "../../assets/home/team-3.svg";
import teamFour from "../../assets/home/team-4.svg";

const Team = () => {
  const teamData = [
    {
      name: "Peg Legge",
      des: "CEO",
      image: teamOne,
    },
    {
      name: "Richard Guerra",
      des: "CTO",
      image: teamTwo,
    },
    {
      name: "Alexandra Stolz",
      des: "DESIGNER",
      image: teamThree,
    },
    {
      name: "Janet Bray",
      des: "DEVELOPER",
      image: teamFour,
    },
  ];

  return (
    <div className="team-section py-5">
      <div className="container">
        <div className="mx-auto text-center" style={{ maxWidth: "411px" }}>
          <p className="fw-bold" style={{ color: "#74C69D" }}>
            PARTNERS
          </p>
          <h1 className="fw-bold font-crimson-text">Lorem Ipsum Dolor</h1>
          <h5 className="fw-normal mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h5>
        </div>
        <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-between my-5">
          {teamData?.map((item, index) => (
            <>
              <div
                className="card p-4"
                style={{
                  width: "280px",
                  height: "300px",
                  boxShadow: "3px 4px 12px 1px #00000040",
                }}
                key={index}
              >
                <img
                  src={item?.image}
                  alt=""
                  className="img-fluid mx-auto"
                  style={{ width: "175px", height: "175px" }}
                />
                <h4 className="fw-bold mt-3">{item?.name}</h4>
                <p>{item?.des}</p>
              </div>
            </>
          ))}
        </div>

        <div className="text-center">
          <button type="button" class="btn btn-dark px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
