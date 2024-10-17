import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Bajaj Finance</h1>
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/emicalc">EMI Calculator</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="/enquiry">Enquiry</Link></li> {/* Update this line */}
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
