import React from "react";

function Qualification() {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__content">
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">MCA</h3>
              <span className="qualification__subtitle">Panjab University, Chandigarh</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2023 - 2025
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">BCA</h3>
              <span className="qualification__subtitle">DAV College, Hoshiarpur</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> 2020 - 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
