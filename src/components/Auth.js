import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth.js";

// Define the Auth component
const Auth = () => {
  const dispatch = useDispatch();

  // Define the loginHandler function
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  // Render the Auth component
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

// Export the Auth component
export default Auth;
