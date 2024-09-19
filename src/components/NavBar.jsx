import { useNavigate } from "react-router-dom";
import homeImage from "../Assets/house-chimney-solid.svg";
import pillImage from "../Assets/pills-solid.svg"; //renamed svg and imported from assets folder

export default function NavBar() {
  let navigate = useNavigate();
  return (
    <nav className="menubar">
      <div>
        <>
          <button className="nav-btns" onClick={() => navigate("/")}>
            <img className="house" src={homeImage} alt="house icon"></img>
            Home
          </button>
          <button className="nav-btns" onClick={() => navigate("/form")}>
            <img className="pill" src={pillImage} alt="pills"></img>
            Add New Medication
          </button>
        </>
      </div>
    </nav>
  );
}
