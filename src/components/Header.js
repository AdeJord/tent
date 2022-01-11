import React, { useState } from "react";
import styled from "styled-components";
import { Menu as MenuIcon } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import MenuButton from "./MenuButton";

const mainEl = document.getElementById("main-el")


const Container = styled.div`
  padding: .5em;
  width: 100vw;
  height: 15vh;
  font-size: 2rem;
  color: red;
  background: green;
  display: flex;
`;

export default function Header() {

  return (
    <Container>
      <MenuButton />
      Truman Enterprise Narrowboat Trust
    </Container>
  );
}