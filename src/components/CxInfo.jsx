import React from "react";

const CxInfo = ({ name, age, address, city, state, zip, related }) => {
  return (
    <div className="cx-info">
      <div className="heading">Potential Owners</div>
      <div className="d-col cx-cards" id="cards-wrap">
        <div className="d-col cx-card sample" id="sample1" title="">
          <div className="d-row cx-basic">
            <div className="d-col cx-name">
              <h4 className="label">PERSON NAME</h4>
              <h3 className="value">{name ?? "John Doe"}</h3>
            </div>
            <div className="d-col cx-age">
              <h4 className="label">AGE</h4>
              <h3 className="value">{age ?? "00"}</h3>
            </div>
          </div>
          <div className="d-col cx-addresses">
            <div className="d-row cx-address">
              <div className="d-col cx-address-col home">
                <h5 className="label">ADDRESS</h5>
                <h4 className="value">{address ?? "APT#123 DR"}</h4>
              </div>
              <div className="d-col cx-address-col city">
                <h5 className="label">CITY</h5>
                <h4 className="value">{city ?? "ABC CITY"}</h4>
              </div>
              <div className="d-col cx-address-col state">
                <h5 className="label">STATE</h5>
                <h4 className="value">{state ?? "XX"}</h4>
              </div>
              <div className="d-col cx-address-col zip">
                <h5 className="label">ZIP</h5>
                <h4 className="value">{zip ?? "12345"}</h4>
              </div>
              <div className="d-col cx-address-col deliverable">D</div>
            </div>
            {/* Additional address rows */}
          </div>
          <div className="d-row cx-misc">
            <div className="d-col cx-misc-col cx-related">
              <h4 className="label">Related</h4>
              <div className="value-container relations d-row">
                <h3 className="value relation">{related ?? "William Doe"}</h3>
                <h3 className="value relation">{related ?? "Kevin Doe"}</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Additional cx-card sample */}
      </div>
    </div>
  );
};

export default CxInfo;
