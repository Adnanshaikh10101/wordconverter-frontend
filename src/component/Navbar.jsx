import "../index.css";

function Navbar() {
  return (
    <nav className="navbar" >
      <h2 className="logo" ><span>W</span>ord Converter</h2>

      <ul className="nav-links">
        <li>
          <a href="/" >Home</a>
        </li>
        <li>
          <a href="/about" >About</a>
        </li>
        <li>
          <a href="/contact" >Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;