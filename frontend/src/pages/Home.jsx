import "../scss/home.scss";
import Chart from "../components/chart/Chart";
import Featured from "../components/featured/Featured";
import Widget from "../components/widget/Widget";
import Table from "../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();
  const [claims, setClaims] = useState([]);
  const [claimCount, setClaimCount] = useState({
    a: 0,
    p: 0,
    cp: 0,
    r: 0,
    t: 0,
  });

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    axios
      .get("/api/claim", {}, config)
      .then((res) => {
        setClaims(res.data);
      })
      .catch((err) => toast.error(err.response.data));
  }, []);

  useEffect(() => {
    let a, p, cp, r, t;
    a = p = cp = r = t = 0;

    if (claims.length > 0) {
      a = claims.reduce((acc, claim) => {
        if (claim.status === "Approved") {
          return acc + 1;
        } else return 0;
      }, 0);

      p = claims.reduce((acc, claim) => {
        if (claim.status === "Pending") {
          return acc + 1;
        } else return 0;
      }, 0);

      cp = claims.reduce((acc, claim) => {
        if (claim.status === "Clarification Pending") {
          return acc + 1;
        } else return 0;
      }, 0);

      r = claims.reduce((acc, claim) => {
        if (claim.status === "Rejected") {
          return acc + 1;
        } else return 0;
      }, 0);

      t = a + p + cp + r;
    }

    setClaimCount({
      a,
      p,
      cp,
      r,
      t,
    });
  }, [claims]);

  return (
    <div className="homeContainer">
      <div className="widgets">
        <Widget type="a" count={claimCount.a} />
        <Widget type="p" count={claimCount.p} />
        <Widget type="r" count={claimCount.cp} />
        <Widget type="cp" count={claimCount.r} />
        <Widget type="t" count={claimCount.t} />
      </div>

      <div className="listContainer">
        <div className="listTitle d-flex justify-content-between">
          <p>My Claims</p>
          <p>
            Total Amount:{" "}
            {claims.length > 0
              ? claims.reduce((acc, claim) => acc + parseFloat(claim.amount), 0)
              : 0}
          </p>
        </div>
        <Table claims={claims} />
      </div>
      <div className="charts">
        <Featured
          total={{
            amount:
              claims.length > 0
                ? claims.reduce((a, c) => a + parseFloat(c.amount), 0)
                : 0,
            count: claimCount.t,
          }}
        />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
