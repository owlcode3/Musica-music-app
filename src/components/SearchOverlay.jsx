import { useContext, useState, useEffect } from "react";
import StateContext from "@/StateContext";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function SearchOverlay() {
   const { setIsSearchOverlayOpen, accessToken, windowWidth, audio } = useContext(StateContext);
   const [input, setInput] = useState("");
   const [searchedArtists, setSearchedArtists] = useState([]);
   const [isFetching, setIsFetching] = useState();
   const [isSearchTrue, setIsSearchTrue] = useState(false);

   const mobileWidth = windowWidth < 700;

   useEffect(() => {
      document.addEventListener("keyup", escKeyPressHandler);
      return () => document.removeEventListener("keyup", escKeyPressHandler);
   }, []);

   const escKeyPressHandler = e => {
      if (e.keyCode == 27) {
         setIsSearchOverlayOpen(false);
      }
   };

   const checkIfEmpty = () => {
      if (input === "") return false;
      return true;
   };

   var artistParameter = {
      method: "GET",
      headers: {
         "Content-type": "application/json",
         Authorization: "Bearer " + accessToken
      }
   };

   const getArtists = async e => {
      e.preventDefault();
      try {
         setIsFetching(true);
         const response = await fetch(
            `https://api.spotify.com/v1/search?q=${input}&type=artist`,
            artistParameter
         );
         if (response.status === 200) {
            setIsFetching(false);
            const data = await response.json();
            const { items } = data.artists;
            setSearchedArtists(items);
            setIsSearchTrue(true);
         }
      } catch (e) {
         console.log(e.message);
      }
   };

   return (
      <div className="search-overlay">
         <div className="search-overlay__box">
            <div
               className="search-overlay__search-box"
               style={{ borderBottom: checkIfEmpty() ? "0.1px solid #609eaf" : "" }}
            >
               <div className=" search-overlay__input-box ip">
                  <span className="search-overlay__search">
                     <img className="search-overlay__search-icon" src="/search.svg" alt="" />
                  </span>
                  <form onSubmit={getArtists}>
                     <input
                        autoComplete="off"
                        autoFocus
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        className="search-overlay__input"
                        type="text"
                        name="input"
                        id="input"
                        placeholder="Search artists, music"
                     />
                  </form>
                  {checkIfEmpty() ? (
                     <span
                        onClick={() => setInput("")}
                        className="search-overlay__search search-overlay__search--cancel"
                     >
                        <img src="/dialogcancel.svg" alt="" />
                     </span>
                  ) : (
                     ""
                  )}
               </div>
               <span
                  onClick={() => setIsSearchOverlayOpen(false)}
                  className="search-overlay__cancel"
               >
                  Cancel
               </span>
            </div>

            <div className="search-overlay__body">
               {!isSearchTrue ? (
                  <div className="search-for-artists">
                     <span>Search for your favorite artists, songs, and more.</span>
                  </div>
               ) : isFetching ? (
                  <div className="search-for-artists">
                     <Spinner />
                  </div>
               ) : (
                  <div
                     style={{ paddingBottom: audio != null ? "11rem" : "0.5rem" }}
                     className="search-overlay__body-inner"
                  >
                     <div className="search-overlay__types-box">
                        <ul className="search-overlay__types">
                           <li className="search-overlay__type">
                              <Link>Top</Link>
                           </li>
                           <li className="search-overlay__type">
                              <Link>Artists</Link>
                           </li>
                           <li className="search-overlay__type">
                              <Link>Songs</Link>
                           </li>
                           <li className="search-overlay__type">
                              <Link>Albums</Link>
                           </li>
                           <li className="search-overlay__type">
                              <Link>Playlists</Link>
                           </li>
                           <li className="search-overlay__type">
                              <Link>Genres & moods</Link>
                           </li>
                           <li className="search-overlay__type">
                              <Link>Profiles</Link>
                           </li>
                           <li className="search-overlay__type search-overlay__type--hide">
                              <Link>Podcasts & Shows</Link>
                           </li>
                        </ul>
                     </div>

                     <div className="search-overlay__searched-artists-box">
                        <ul className="search-overlay__searched-artists search-overlay__searched-artists--hide mb-md">
                           <li className="search-overlay__searched-artist">
                              <Link>
                                 <img
                                    className="search-overlay__artist-image"
                                    src={searchedArtists[0].images[0].url}
                                    alt=""
                                 />
                                 <div className="search-overlay__artist-details">
                                    <h2 className="search-overlay__artist-name">
                                       {searchedArtists[0].name}{" "}
                                       <img src="/icons8-i-v-b-.svg" alt="" />
                                    </h2>
                                    <span className="search-overlay__artist-pro">
                                       {searchedArtists[0].type}
                                    </span>
                                 </div>
                              </Link>
                           </li>
                        </ul>

                        <div className="search-overlay__featuring-body">
                           <div className="search-overlay__featuring-heading">
                              Featuring {searchedArtists[0].name}
                           </div>
                           <ul className="search-overlay__featuring-box">
                              <li className="search-overlay__featuring-card">
                                 <img src={searchedArtists[0].images[1].url} alt="" />
                                 <div className="search-overlay__featuring-texts">
                                    <h2>This is {searchedArtists[0].name}</h2>
                                 </div>
                              </li>

                              <li className="search-overlay__featuring-card">
                                 <img src={searchedArtists[0].images[2].url} alt="" />
                                 <div className="search-overlay__featuring-texts">
                                    <h2>{searchedArtists[0].name} Radio</h2>
                                 </div>
                              </li>

                              <li className="search-overlay__featuring-card">
                                 <img
                                    src={searchedArtists[0].images[2].url}
                                    alt=""
                                    width="153"
                                    height="153"
                                 />
                                 <div className="search-overlay__featuring-texts">
                                    <h2>{searchedArtists[0].genres[1]}</h2>
                                 </div>
                              </li>

                              <li className="search-overlay__featuring-card">
                                 <img
                                    src={searchedArtists[0].images[2].url}
                                    alt=""
                                    width="153"
                                    height="153"
                                 />
                                 <div className="search-overlay__featuring-texts">
                                    <h2>African Best Afrobeats Song</h2>
                                 </div>
                              </li>

                              <li className="search-overlay__featuring-card">
                                 <img src={searchedArtists[0].images[2].url} alt="" />
                                 <div className="search-overlay__featuring-texts">
                                    <h2>{searchedArtists[0].genres[0]}</h2>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        <ul className="search-overlay__searched-artists">
                           {searchedArtists.flatMap((artist, index) => {
                              if (index == 0 && mobileWidth) return [];
                              return (
                                 <li key={artist.id} className="search-overlay__searched-artist">
                                    <Link>
                                       <img
                                          className="search-overlay__artist-image"
                                          src={artist.images[1]?.url}
                                          alt=""
                                       />
                                       <div className="search-overlay__artist-details">
                                          <h2 className="search-overlay__artist-name">
                                             {artist.name.split(",")[0]}{" "}
                                             <img src="/icons8-i-v-b-.svg" alt="" />
                                          </h2>
                                          <span className="search-overlay__artist-pro">
                                             {artist.type}
                                          </span>
                                       </div>
                                    </Link>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default SearchOverlay;
