import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="section">
        <Link to="/" className="home">
          <h2>Home</h2>
        </Link>

        <ul className="nav">
          <li>About Us</li>

          <li>Support</li>

          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
