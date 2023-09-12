import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="container">
        <div id="logo">Claim Management</div>
        <div id="links">
          <div className="link">
            <Link to="/claim/create">File a claim</Link>
          </div>
          <div className="link">
            <Link to="/claim/approve">Approve claims</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
