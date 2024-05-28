import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const {loggedInUser} = useContext(UserContext)
   console.log(loggedInUser)

  return (
    <div className="flex justify-between items-center p-4 bg-gray-400">
      <div className="text-orange-500 font-bold text-[30px]">
        <h1>Swiggy</h1>
      </div>
      <div className="flex gap-1 ">
        <ul className="flex justify-between gap-10">
          <li >
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
          <Link className="li" to="/">
            Home
          </Link>
          </li>
          <li>
          <Link className="li" to="/about">
            About
          </Link>
          </li>
          <li>
          <Link className="li" to="/contact">
            Contact-US
          </Link>
          </li>
          <button className="bg-red-500 w-35 h-10 "
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
