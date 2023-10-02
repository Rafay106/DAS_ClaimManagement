import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const Featured = ({total}) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Claims</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={total} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Claims Received Today</p>
        <p className="amount">{total.amount}</p>
        <p className="desc">Previous claims may not be included.</p>

        <div className="summary">
          <div className="claimfor">
            <div className="claimtitle">Last Week</div>
            <div className="claimResult negative">
              <ArrowDownwardOutlinedIcon fontSize="small" />
              <div className="claimAmount">Rs. 28k</div>
            </div>
          </div>

          <div className="claimfor">
            <div className="claimtitle">Last Month</div>
            <div className="claimResult positive">
              <ArrowUpwardOutlinedIcon fontSize="small" />
              <div className="claimAmount">Rs. 150k</div>
            </div>
          </div>

          <div className="claimfor">
            <div className="claimtitle">Last Year</div>
            <div className="claimResult positive">
              <ArrowUpwardOutlinedIcon fontSize="small" />
              <div className="claimAmount">Rs. 1250k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
