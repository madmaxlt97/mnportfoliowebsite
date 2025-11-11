import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container">
        <div className="leftside">
          <div className="img-container">
            <Link to="/"></Link>
          </div>
          <div className="name">Max Nikolajev</div>
        </div>
        <div className="rightside">
          <div className="navbar">
            <button className="about" onClick={() => navigate("/about")}>
              ABOUT
            </button>
            <button
              className="portfolio"
              onClick={() => navigate("/portfolio")}
            >
              PORTFOLIO
            </button>
            <button className="contacts" onClick={() => navigate("/contacts")}>
              CONTACTS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
