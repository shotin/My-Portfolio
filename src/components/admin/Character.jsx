import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";

import {Link, useHistory } from "react-router-dom";
import ProductList from "../product/listcharacter.component.js";


function Character() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push('/login')
  }

  return (<>
   <>
   <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
            CryptoComicsLabs
        </Link>

        <DropdownButton id="dropdown-basic-button" title={user && user.name}>
          <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
        </DropdownButton> 
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
              <ProductList />
        </Col>
      </Row>
    </Container>
   </>
  </>);
}

export default Character;