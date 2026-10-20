import reactLogo from "../../assets/hero.png";
import viteLogo from "../../assets/vite.svg";

function Header() {
  return (
    <header>
      <h1>Welcome to Vite + React</h1>
      <div className="logo">
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
      </div>
      <h1>Vite + React</h1>
    </header>
  );
}

export default Header;
