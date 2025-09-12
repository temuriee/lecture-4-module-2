import "./Header.css";

function Header() {
  return (
    <header>
      <div>
        <h1>Welcome To My Website!</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
