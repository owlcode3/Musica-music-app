import { useState } from "react";
import { Link } from "react-router-dom";

function NavIcons() {
   const [isHomeClicked, setIsHomeClicked] = useState(true);
   const [isColClicked, setIsColClicked] = useState(false);
   const [isRadioClicked, setIsRadioClicked] = useState(false);
   const [isMvClicked, setIsMvClicked] = useState(false);
   const [isProfileClicked, setIsProfileClicked] = useState(false);
   const [isLogoutClicked, setIsLogoutClicked] = useState(false);

   const toHome = () => {
      setIsRadioClicked(false);
      setIsMvClicked(false);
      setIsProfileClicked(false);
      setIsLogoutClicked(false);
      setIsColClicked(false);
      setIsHomeClicked(true);
   };

   const homeClicked = () => {
      setIsRadioClicked(false);
      setIsMvClicked(false);
      setIsProfileClicked(false);
      setIsLogoutClicked(false);
      setIsColClicked(false);
      setIsHomeClicked(true);
   };

   const colClicked = () => {
      setIsHomeClicked(false);
      setIsRadioClicked(false);
      setIsMvClicked(false);
      setIsProfileClicked(false);
      setIsLogoutClicked(false);
      setIsColClicked(true);
   };

   const radioClicked = () => {
      setIsHomeClicked(false);
      setIsMvClicked(false);
      setIsProfileClicked(false);
      setIsLogoutClicked(false);
      setIsColClicked(false);
      setIsRadioClicked(true);
   };

   const mvClicked = () => {
      setIsHomeClicked(false);
      setIsProfileClicked(false);
      setIsLogoutClicked(false);
      setIsColClicked(false);
      setIsRadioClicked(false);
      setIsMvClicked(true);
   };

   const profileClicked = () => {
      setIsHomeClicked(false);
      setIsLogoutClicked(false);
      setIsColClicked(false);
      setIsRadioClicked(false);
      setIsMvClicked(false);
      setIsProfileClicked(true);
   };

   const logoutClicked = () => {
      setIsHomeClicked(false);
      setIsColClicked(false);
      setIsRadioClicked(false);
      setIsMvClicked(false);
      setIsProfileClicked(false);
      setIsLogoutClicked(true);
   };

   return (
      <ul className="nav__lists">
         <li onClick={toHome} className="nav__list nav__list--desktop">
            <Link to="/" className="nav__link">
               <span>
                  <img className="nav__icon" src="/logo.svg" alt="" />
               </span>
               <span>.</span>
            </Link>
         </li>

         <div className="nav__border">
            <li onClick={homeClicked} className="nav__list">
               <Link to="/" className="nav__link">
                  <span>
                     <svg
                        id="svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694Z"
                           fill={`${isHomeClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isHomeClicked ? "1" : "0.25"}`}
                        />
                     </svg>
                  </span>
                  <span>Home</span>
               </Link>
            </li>

            <li onClick={colClicked} className="nav__list">
               <Link to="/my-collection" className="nav__link">
                  <span>
                     <svg
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M20.3864 6.477H19.1872V4.69019C19.1872 3.69485 18.3718 2.87939 17.3764 2.87939H11.4044C10.4091 2.87939 9.59364 3.69485 9.59364 4.69019V6.477H8.39443C7.07531 6.477 5.99603 7.55628 5.99603 8.8754V9.0313C6.37978 8.92337 6.77551 8.8754 7.19523 8.8754H21.5856C22.0054 8.8754 22.4011 8.92337 22.7848 9.0313V8.8754C22.7848 7.55628 21.7056 6.477 20.3864 6.477Z"
                           fill={`${isColClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isColClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M16.7049 21.0833C16.3212 21.0833 16.0214 21.3951 16.0214 21.7669C16.0214 22.1386 16.3332 22.4504 16.7049 22.4504C17.0767 22.4504 17.3885 22.1386 17.3885 21.7669C17.3885 21.3951 17.0767 21.0833 16.7049 21.0833Z"
                           fill={`${isColClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isColClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M10.8767 22.1386C10.4929 22.1386 10.1931 22.4504 10.1931 22.8222C10.1931 23.1939 10.5049 23.5057 10.8767 23.5057C11.2484 23.5057 11.5602 23.1939 11.5602 22.8222C11.5602 22.4504 11.2604 22.1386 10.8767 22.1386Z"
                           fill={`${isColClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isColClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M22.7849 10.8302C22.4011 10.7222 22.0054 10.6743 21.5857 10.6743H7.19524C6.77552 10.6743 6.37978 10.7222 5.99604 10.8302C3.93341 11.3698 2.39844 13.2525 2.39844 15.4711V22.6663C2.39844 25.3045 4.557 27.4631 7.19524 27.4631H21.5857C24.2239 27.4631 26.3825 25.3045 26.3825 22.6663V15.4711C26.3825 13.2525 24.8475 11.3698 22.7849 10.8302ZM19.1873 16.7062V21.7669C19.1873 23.134 18.072 24.2492 16.7049 24.2492C15.3378 24.2492 14.2226 23.134 14.2226 21.7669C14.2226 20.3998 15.3378 19.2845 16.7049 19.2845C16.9447 19.2845 17.1726 19.3325 17.3884 19.3924V17.8815L13.3711 18.9727V22.8222C13.3711 22.8342 13.3711 22.8461 13.3591 22.8581C13.3471 24.2132 12.2319 25.3165 10.8768 25.3165C9.5097 25.3165 8.39444 24.2012 8.39444 22.8222C8.39444 21.4431 9.5097 20.3398 10.8768 20.3398C11.1166 20.3398 11.3445 20.3878 11.5723 20.4477V18.2892V16.4304C11.5723 15.3991 12.2199 14.5597 13.2032 14.2958L16.3811 13.4204C17.4004 13.1446 18.048 13.4084 18.4078 13.6842C18.7675 13.9601 19.1873 14.4997 19.1873 15.567V16.7062Z"
                           fill={`${isColClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isColClicked ? "1" : "0.25"}`}
                        />
                     </svg>
                  </span>
                  <span>My collections</span>
               </Link>
            </li>

            <li onClick={radioClicked} className="nav__list">
               <Link to="/" className="nav__link">
                  <span>
                     <svg
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M9.29374 2.96007V6.55767H8.39433C8.08254 6.55767 7.78274 6.56966 7.49493 6.61763V2.96007C7.49493 2.4684 7.90266 2.06067 8.39433 2.06067C8.88601 2.06067 9.29374 2.4684 9.29374 2.96007Z"
                           fill={`${isRadioClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isRadioClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M20.3864 6.55768H8.39444C8.08265 6.55768 7.78285 6.56967 7.49504 6.61764C4.4011 6.9774 2.39844 9.26787 2.39844 12.5537V20.9481C2.39844 24.5457 4.79684 26.9441 8.39444 26.9441H20.3864C23.9841 26.9441 26.3825 24.5457 26.3825 20.9481V12.5537C26.3825 8.95608 23.9841 6.55768 20.3864 6.55768ZM9.44974 19.7489C7.79484 19.7489 6.45174 18.4058 6.45174 16.7509C6.45174 15.096 7.79484 13.7529 9.44974 13.7529C11.1046 13.7529 12.4477 15.096 12.4477 16.7509C12.4477 18.4058 11.1046 19.7489 9.44974 19.7489ZM17.2445 20.0487H16.6449C16.1533 20.0487 15.7455 19.641 15.7455 19.1493C15.7455 18.6576 16.1533 18.2499 16.6449 18.2499H17.2445C17.7362 18.2499 18.1439 18.6576 18.1439 19.1493C18.1439 19.641 17.7362 20.0487 17.2445 20.0487ZM21.4417 20.0487H20.8421C20.3505 20.0487 19.9427 19.641 19.9427 19.1493C19.9427 18.6576 20.3505 18.2499 20.8421 18.2499H21.4417C21.9334 18.2499 22.3411 18.6576 22.3411 19.1493C22.3411 19.641 21.9334 20.0487 21.4417 20.0487ZM21.4417 15.2519H16.6449C16.1533 15.2519 15.7455 14.8442 15.7455 14.3525C15.7455 13.8608 16.1533 13.4531 16.6449 13.4531H21.4417C21.9334 13.4531 22.3411 13.8608 22.3411 14.3525C22.3411 14.8442 21.9334 15.2519 21.4417 15.2519Z"
                           fill={`${isRadioClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isRadioClicked ? "1" : "0.25"}`}
                        />
                     </svg>
                  </span>
                  <span>Radio</span>
               </Link>
            </li>

            <li onClick={mvClicked} className="nav__list">
               <Link to="/" className="nav__link">
                  <span>
                     <svg
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M13.491 9.76819H2.39844V19.7575C2.39844 19.8295 2.39844 19.9014 2.41043 19.9614H13.491V9.76819Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M9.22186 7.96936H13.491V2.74084H9.25784V7.82546C9.25784 7.87342 9.23385 7.92139 9.22186 7.96936Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M7.45899 7.82548V2.93274C4.79677 3.48437 3.05792 5.25919 2.55426 7.96938H7.48298C7.47098 7.92141 7.45899 7.87345 7.45899 7.82548Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M19.451 2.74084H15.2898V7.96936H19.451V2.74084Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M21.2378 7.96941H26.2265C25.7228 5.23523 23.96 3.44842 21.2498 2.92078V7.93344C21.2498 7.94543 21.2378 7.95742 21.2378 7.96941Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M21.2498 26.545C23.876 26.0293 25.6029 24.3505 26.1665 21.7602H21.2498V26.545Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M19.451 21.7602H15.2898V26.7249H19.451V21.7602Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M15.2898 19.9614H26.3704C26.3824 19.9014 26.3824 19.8295 26.3824 19.7575V9.76819H15.2898V19.9614Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M13.491 21.7602H9.25781V26.7249H13.491V21.7602Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M2.6142 21.7602C3.17782 24.3265 4.88069 26.0054 7.45897 26.533V21.7602H2.6142Z"
                           fill={`${isMvClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isMvClicked ? "1" : "0.25"}`}
                        />
                     </svg>
                  </span>
                  <span>Music video</span>
               </Link>
            </li>
         </div>

         <div className="nav__border">
            <li onClick={profileClicked} className="nav__list">
               <Link to="/" className="nav__link">
                  <span>
                     <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M14.39 2.52162C11.2482 2.52162 8.69397 5.07585 8.69397 8.21767C8.69397 11.2995 11.1043 13.7938 14.2461 13.9017C14.342 13.8897 14.438 13.8897 14.5099 13.9017C14.5339 13.9017 14.5459 13.9017 14.5699 13.9017C14.5819 13.9017 14.5819 13.9017 14.5939 13.9017C17.6637 13.7938 20.0741 11.2995 20.0861 8.21767C20.0861 5.07585 17.5318 2.52162 14.39 2.52162Z"
                           fill={`${isProfileClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isProfileClicked ? "1" : "0.25"}`}
                        />
                        <path
                           d="M20.4818 17.0915C17.1361 14.861 11.6799 14.861 8.31023 17.0915C6.78729 18.1108 5.94788 19.4898 5.94788 20.9648C5.94788 22.4398 6.78729 23.8068 8.29824 24.8141C9.97708 25.9413 12.1835 26.505 14.39 26.505C16.5965 26.505 18.8029 25.9413 20.4818 24.8141C21.9927 23.7948 22.8321 22.4278 22.8321 20.9408C22.8202 19.4658 21.9927 18.0988 20.4818 17.0915Z"
                           fill={`${isProfileClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isProfileClicked ? "1" : "0.25"}`}
                        />
                     </svg>
                  </span>
                  <span>Profile</span>
               </Link>
            </li>

            <li onClick={logoutClicked} className="nav__list">
               <Link to="/" className="nav__link">
                  <span>
                     <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M11.7817 0.30162C14.7587 0.30162 17.1866 2.68796 17.1866 5.62592V11.3699H9.86615C9.34152 11.3699 8.92669 11.7776 8.92669 12.2933C8.92669 12.7969 9.34152 13.2166 9.86615 13.2166H17.1866V18.9487C17.1866 21.8866 14.7587 24.285 11.7573 24.285H5.81548C2.82628 24.285 0.398315 21.8986 0.398315 18.9607V5.63791C0.398315 2.68796 2.83848 0.30162 5.82768 0.30162H11.7817ZM20.2328 8.1564C20.5925 7.78466 21.1801 7.78466 21.5399 8.14441L25.0414 11.634C25.2213 11.8139 25.3172 12.0417 25.3172 12.2935C25.3172 12.5334 25.2213 12.7732 25.0414 12.9411L21.5399 16.4307C21.36 16.6105 21.1202 16.7065 20.8923 16.7065C20.6525 16.7065 20.4126 16.6105 20.2328 16.4307C19.873 16.0709 19.873 15.4833 20.2328 15.1236L22.1514 13.2169H17.1869V11.3702H22.1514L20.2328 9.46349C19.873 9.10374 19.873 8.51615 20.2328 8.1564Z"
                           fill={`${isLogoutClicked ? "#face66" : "#EFEEE0"}`}
                           fillOpacity={`${isLogoutClicked ? "1" : "0.25"}`}
                        />
                     </svg>
                  </span>
                  <span>Log out</span>
               </Link>
            </li>
         </div>
      </ul>
   );
}

export default NavIcons;
