import logo from "../images/Logo.svg";
import Nav from "./Nav";

function Header() {
    return (
        <header>
            <img width="400px" src={logo} alt="Logo"></img>
            <Nav />
        </header>
    );
  }

export default Header;