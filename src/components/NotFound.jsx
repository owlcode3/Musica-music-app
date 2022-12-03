import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
   return (
      <div className="not-found">
         <div className="not-found__box">
            <ul className="not-found__lists">
               <li className="not-found__list">404</li>
               <li className="not-found__list">Ooops!!</li>
            </ul>

            <div className="not-found__body">
               <h1>Seems you've lost your way, why not go back?</h1>{" "}
               <Link to="/">
                  <img src="/src/assets/home.svg" alt="" /> Home
               </Link>
            </div>
         </div>
      </div>
   );
}

export default NotFound;
