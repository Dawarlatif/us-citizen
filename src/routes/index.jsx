import React from "react";
import Layout from "../layout";
import { Route, Routes } from "react-router-dom";
import PhonePage from "../pages/Phone";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<PhonePage />} />
          {/* <Route index path="/email" element={< />} /> */}
          {/* <Route index path="/ud" element={< />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default RoutesMain;
