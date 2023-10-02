import "./widget.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import DoDisturbAltOutlinedIcon from "@mui/icons-material/DoDisturbAltOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { Link } from "react-router-dom";
import axios from "axios";

const Widget = ({ type, count = 0 }) => {
  let data;
  const amount = count;
  const diff = 20;

  switch (type) {
    case "a":
      data = {
        title: "Approved",
        isMoney: false,
        link: "See All Approved",
        icon: (
          <ThumbUpAltOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0,128,0,0.2)",
            }}
          />
        ),
      };
      break;

    case "p":
      data = {
        title: "Pending",
        isMoney: true,
        link: "See All Pending",
        icon: (
          <PendingActionsOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;

    case "r":
      data = {
        title: "Rejected",
        isMoney: false,
        link: "See All Rejected",
        icon: (
          <DoDisturbAltOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255,0,0,0.2)",
            }}
          />
        ),
      };
      break;

    case "cp":
      data = {
        title: "Clarification Pending",
        isMoney: false,
        link: "See All Clarification Pending",
<<<<<<< Updated upstream
        icon: (
          <ExploreOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128,0,128,0.2)",
            }}
          />
        ),
      };
      break;

    case "t":
      data = {
        title: "Total",
        isMoney: false,
        link: "See All Claims",
=======
>>>>>>> Stashed changes
        icon: (
          <ExploreOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128,0,128,0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && ""}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowUpwardOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
