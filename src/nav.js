import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import React from "react";

function Navbar() {
  const amount = useSelector((state) => state.amount);
  return (
    <Nav activeKey="/home">
      <h1>Bank</h1>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      <button disabled={true} className="btn-primary">
        Your Balance: {amount}
      </button>
    </Nav>
  );
}

export default Navbar;
