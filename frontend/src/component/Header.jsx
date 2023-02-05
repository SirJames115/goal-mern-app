// import React from "react";
// import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">
//         <Link to="/">GoalSetter</Link>
//       </div>
//       <ul>
//         <li>
//           <Link to="/login">
//             <FaSignInAlt /> Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/register">
//             <FaUser /> Register
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <h1>GoalSetter</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to={"/login"}>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to={"/register"}>
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
