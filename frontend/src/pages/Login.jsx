// import { useState, useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = formData;

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <>
//       <section className="heading">
//         <h1>
//           <FaSignInAlt /> Login
//         </h1>
//         <p>Login and start setting goals</p>
//       </section>
//       <section className="form">
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={email}
//               name="email"
//               placeholder="Enter your email"
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               name="password"
//               placeholder="Enter password"
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-control">
//             <button type="submit" className="btn btn-block">
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// }

// export default Login;

import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Register() {
  const [formData, setFormDate] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <FaSignInAlt />
        <p>Login to have access</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
