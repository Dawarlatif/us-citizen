import React from "react";
import InputForm from "../../components/InputForm";
import ReportForm from "../../components/ReportForm";
import TcpaStatus from "../../components/TcpaStatus";
import CxInfo from "../../components/CxInfo";
import Errors from "../../components/Errors";

const EmailPage = () => {
  return (
    <div id="main">
      <div id="hr"></div>
      <InputForm />
      <ReportForm />
      <TcpaStatus />
      <CxInfo />
      <Errors />
    </div>
  );
};

export default EmailPage;
