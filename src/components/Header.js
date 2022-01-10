import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Menu as MenuIcon } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";

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

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
  mainEl.textContent=(JSON.stringify(item, item, 2))
}

export default function Header() {


  const items = [
    { name: "home", label: "Home", Icon: HomeIcon, link: "./pages/home" },
    "divider",
    {
      name: "About Us",
      label: "About Us",
      items: [
        { name: "About the Trust", label: "About the Trust", link: "./pages/aboutTheTrust", onClick },
        { name: "Volunteers", label: "Volunteers", onClick },
        { name: "Boat Brochure", label: "Boat Brochure", onClick },
        { name: "Details and Diagrams", label: "Details and Diagrams", onClick },
        { name: "Aims and Objectives", label: "Aims and Objectives", onClick },
        { name: "Our History", label: "Our History", onClick },
        { name: "Meet the crew", label: "Meet the crew", onClick },
        { name: "Risk Assesments", label: "Risk Assesments", onClick },
        { name: "Useful links", label: "Useful Links", onClick },
        
      ],
    },
    "divider",
    {
      name: "Book your trip",
      label: "Book your trip",
      items: [
        { name: "How much does it cost", label: "How much does it cost", onClick },
        { name: "How to pay for your trip", label: "How to pay for your trip", onClick },
        { name: "Have a go days", label: "Have a go days", onClick },
        { name: "Training", label: "Training", onClick },
        { name: "Terms and conditions", label: "Terms and conditions", onClick },
        { name: "Check Availability", label: "Check Availability", onClick },
        { name: "Book online", label: "Book online", onClick },      
      ],
    },
    "divider",
    {
      name: "Photo Gallery",
      label: "Photo Gallery",
      items: [
        { name: "IWA 24 hour challenge", label: "IWA 24 hour challenge", onClick },
        { name: "Pelsall rally", label: "Pelsall rally", onClick },
        { name: "Others", label: "Other TBC", onClick },
      ],
    },
    "divider",
    {
      name: "Contact Us",
      label: "Contact Us",
    },
  ];
  

const handleClick = () => {
    //will not require this in final as the click on the links
    // will change state instead
    setShow(prevmenuShow => !prevmenuShow);
    console.log("Clicked", !show)
}

const [show, setShow] = useState(false);

  return (
    <Container>
      <button className="menu-button" onClick={handleClick}>
        <MenuIcon />Menu
      </button>
      Truman Enterprise Narrowboat TrustEEeeeee
    </Container>
  );
}