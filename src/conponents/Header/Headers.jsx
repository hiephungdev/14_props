import reactLogo from "../../assets/hero.png";
import viteLogo from "../../assets/vite.svg";
import "./Headers.css";

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-header__title">Welcome to Vite + React</h1>
      <div className="site-header__logos">
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
      </div>
      <p className="site-header__caption">Xây dựng giao diện hiện đại với React và Vite</p>
    </header>
  );
}

export default Header;
