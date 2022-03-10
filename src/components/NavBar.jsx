import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <ul>
      <li className="Navigation-li">
        <Link to="/articles">Home</Link>
      </li>
      <li className="Navigation-li">
        <Link to="/user">User</Link>
      </li>
      <li className="Navigation-li" style={{ float: "right" }}>
        Logout
      </li>
    </ul>
  );
}
