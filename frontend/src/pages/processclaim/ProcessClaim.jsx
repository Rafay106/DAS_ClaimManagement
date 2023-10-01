import "./processclaim.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import ProcessTable from "../../components/processTable/ProcessTable";

const ProcessClaim = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="listContainer">
          <div className="listTitle">My Claims</div>
          <ProcessTable />
        </div>

        <div className="listContainer">
          <div className="listTitle">My Team Claims</div>
          <ProcessTable />
        </div>
      </div>
    </div>
  );
};

export default ProcessClaim;
