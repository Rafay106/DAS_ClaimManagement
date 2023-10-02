import "../scss/processclaim.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

import ProcessTable from "../components/processTable/ProcessTable";
import { useEffect, useState } from "react";
import axios from "axios";

const ProcessClaim = () => {
  const [myClaims, setMyClaims] = useState([]);
  const [teamClaims, setTeamClaims] = useState([]);

  useEffect(() => {
    axios
      .get("/api/claim")
      .then((res) => {
        setMyClaims(res.data);
      })
      .catch((err) => toast.error(err.response.data));

    axios
      .get("/api/claim/team")
      .then((res) => {
        setTeamClaims(res.data);
      })
      .catch((err) => toast.error(err.response.data));
  }, []);
  return (
    <div className="new">
      <div className="newContainer">
        <div className="listContainer">
          <div className="listTitle">My Claims</div>
          <ProcessTable claims={myClaims} />
        </div>

        <div className="listContainer">
          <div className="listTitle">My Team Claims</div>
          <ProcessTable claims={teamClaims} />
        </div>
      </div>
    </div>
  );
};

export default ProcessClaim;
