import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import ReportForm from "../../components/ReportForm";
import TcpaStatus from "../../components/TcpaStatus";
import CxInfo from "../../components/CxInfo";
import Errors from "../../components/Errors";
import {
  getBlackListAllianceData,
  getFastPeopleData,
} from "../../utils/apiUtils";

const PhonePage = () => {
  const [query, setQuery] = useState("");
  const [fastPeopleData, setFastPeopleData] = useState(null);
  console.log("fastPeopleSearchData", fastPeopleData);
  const [blackListAllianceData, setBlackListAllianceData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const [fastPeopleResponse, blacklistResponse] = await Promise.all([
        getFastPeopleData(query),
        getBlackListAllianceData(query),
      ]);
      setFastPeopleData(fastPeopleResponse);
      setBlackListAllianceData(blacklistResponse);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div id="main">
      <div id="hr"></div>
      <InputForm
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <ReportForm />
      <TcpaStatus />
      <CxInfo />
      <Errors />
    </div>
  );
};

export default PhonePage;
