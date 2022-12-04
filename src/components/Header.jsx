import StateContext from "@/StateContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
   const { isMenuOpen, setIsMenuOpen, setIsSearchOverlayOpen } = useContext(StateContext);

   return (
      <header className="header">
         <div>
            <div className="container">
               <div className="header__box">
                  <span onClick={() => setIsMenuOpen(!isMenuOpen)} className="header__menu">
                     <img className="header__icon" src="/menu.svg" alt="" />
                  </span>

                  <span className="header__music">
                     <Link to="/">
                        <img className="header__icon" src="/logo.svg" alt="" />
                     </Link>
                  </span>

                  <span onClick={() => setIsSearchOverlayOpen(true)} className="header__search">
                     <img className="header__icon" src="/search.svg" alt="" />
                  </span>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
