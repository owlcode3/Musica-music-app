import { useGetPlaylistQuery } from "@/redux/services/musicaApi";
import StateContext from "@/StateContext";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Loading from "./Spinner";

function TopCharts() {
   const urls = ["/tomorrow-tunes", "/faaji-xpress", "/fresh-tunes", "/ariya-tunes"];
   const playlistName = ["Tomorrow-Tunes", "Faaji-Xpress", "Fresh-Tunes", "Ariya-Tunes"];

   const { windowWidth } = useContext(StateContext);
   const LaptopWidth = windowWidth > 1023;

   const { data, isFetching, error } = useGetPlaylistQuery();
   const [playlist, setPlaylist] = useState([]);

   useEffect(() => {
      if (data) {
         setPlaylist(LaptopWidth ? Array.from(data).slice(2, 5) : Array.from(data).slice(2));
      }
   }, [data]);

   return (
      <div className="top-charts">
         <div className="top-charts__box">
            <h2 className="top-charts__heading">Top charts</h2>
            <ul className="top-charts__card-box">
               {isFetching ? (
                  <Loading size={"3"} />
               ) : (
                  playlist?.map((data, index) => {
                     return (
                        <Link
                           key={index}
                           className="top-charts__link"
                           to={`${urls[index]}/${data?.id}`}
                        >
                           <li className="top-charts__card">
                              <div className="top-charts__detail">
                                 <div className="top-charts__img-box">
                                    <img
                                       className="top-charts__image"
                                       src={data?.cover}
                                       alt="image cannot be found"
                                    />

                                    <div className="top-charts__artist-box-lpt">
                                       <h2>{playlistName[index]}</h2>
                                       <h3>cover photo: {data?.title.replace("Playlist", "")}</h3>
                                       <span>2:34:45</span>
                                    </div>

                                    <span className="top-charts__like">
                                       <img src="/Heart.svg" alt="" />
                                    </span>
                                 </div>
                                 <div className="top-charts__artist-box">
                                    <h2>{playlistName[index]}</h2>
                                    <h3>cover photo: {data?.title.replace("Playlist", "")}</h3>
                                    <span>2:34:45</span>
                                 </div>
                              </div>
                           </li>
                        </Link>
                     );
                  })
               )}
               {error ? <h3>There's an error, try again</h3> : ""}
            </ul>
         </div>
      </div>
   );
}

export default TopCharts;
