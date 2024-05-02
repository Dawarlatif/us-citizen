import React from "react";

const TcpaStatus = ({
  phone,
  state,
  dncNational,
  dncState,
  litigator,
  blacklist,
}) => {
  return (
    <div className="tcpa-status">
      <div className="heading">Blacklist Status</div>
      <div className="tcpa d-col" id="tcpa">
        <div className="d-row tcpa-row" id="phone">
          <div className="tcpa-label">Phone</div>
          <div className="tcpa-value">{phone ?? "..."}</div>
        </div>
        <div className="d-row tcpa-row" id="state">
          <div className="tcpa-label">State</div>
          <div className="tcpa-value">{state ?? "..."}</div>
        </div>
        <div className="d-row tcpa-row" id="national-dnc">
          <div className="tcpa-label">
            DNC
            <sub
              style={{
                fontWeight: "600",
                fontSize: "12px",
                fontFamily: "Scrubber-Regular",
              }}
            >
              National
            </sub>
          </div>
          <div className="tcpa-value">{dncNational ?? "..."}</div>
        </div>
        <div className="d-row tcpa-row" id="state-dnc">
          <div className="tcpa-label">
            DNC
            <sub
              style={{
                fontWeight: "600",
                fontSize: "12px",
                fontFamily: "Scrubber-Regular",
              }}
            >
              State
            </sub>
          </div>
          <div className="tcpa-value">{dncState ?? "..."}</div>
        </div>
        <div className="d-row tcpa-row" id="cases">
          <div className="tcpa-label">Litigator</div>
          <div className="tcpa-value" style={{ textTransform: "capitalize" }}>
            {litigator ?? "..."}
          </div>
        </div>
        <div className="d-row tcpa-row" id="listed">
          <div className="tcpa-label">Blacklist</div>
          <div className="tcpa-value">{blacklist ?? "..."}</div>
        </div>
      </div>
    </div>
  );
};

export default TcpaStatus;
