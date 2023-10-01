import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import "./home.scss";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    console.log(document.cookie);
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // axios.post("/api/claim")
    // const response = await axios.post(API_URL, goalData, config);
  }, [])
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <Widget type="Approved" />
          <Widget type="Pending" />
          <Widget type="Denied" />
          <Widget type="Clarification Required" />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Claims</div>
          <Table />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
