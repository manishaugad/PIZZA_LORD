import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import noPage from "../nopage/nopage.jpg";
import myContext from "../../context/data/myContext";

function NoPage() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center h-screen bg-gray-100"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <img src={noPage} alt="Error" className="max-w-full max-h-200 mb-4" />
        <p className="text-xl text-gray-700 font-bold" style={{ color: mode === "dark" ? "white" : "" }}>
          Oops! You are on the wrong page.
        </p>
      </div>
    </Layout>
  );
}

export default NoPage;