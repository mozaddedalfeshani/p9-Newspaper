import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex flex-row mt-4 justify-between items-center">
      <div></div>
      <div>
        <div className="flex gap-2">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Carrer</NavLink>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>
          <img src={user}></img>
        </div>
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
