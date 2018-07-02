import React from "react";
import "./header.css";

import { Container } from "../../components/Grid";

const Header = () => (
    <div className="header">
    <Container fluid>
        <h1>Clicking Memory Game!</h1>
        <h3>Click on an image to earn points, but don't click on any more than once!</h3>
    </Container>
    </div>
  );
  
  export default Header;