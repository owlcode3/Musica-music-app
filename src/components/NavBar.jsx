import React, { useContext, useEffect, useState } from "react";
import StateContext from "@/StateContext";
import useOnclickOutside from "react-cool-onclickoutside";
import { useLocation } from "react-router-dom";
import NavIcons from "./NavIcons";

function NavBar() {
   const { isMenuOpen, setIsMenuOpen } = useContext(StateContext);
   const ref = useOnclickOutside(() => {
      setIsMenuOpen(false);
   });

   const { path } = useLocation();

   useEffect(() => {
      setIsMenuOpen(false);
   }, [path]);

   return (
      <nav ref={ref} className={`nav ${isMenuOpen ? "nav--from-left" : "-100%"}`}>
         <NavIcons />
      </nav>
   );
}

export default NavBar;
