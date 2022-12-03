import { addCurTrack, addSongsToList } from "@/redux/features/playerSlice";
import { useGetPlaylistQuery } from "@/redux/services/musicaApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./Spinner";

function FaajiXpress() {
   const dispatch = useDispatch();
   const { data, isFetching, error } = useGetPlaylistQuery();
   const [playlistTt, setPlaylistTt] = useState([]);
   const [imageTt, setImageTt] = useState([]);

   useEffect(() => {
      if (data) {
         setPlaylistTt(data[3]?.files);
         setImageTt(data[3]);
      }
   }, [data]);

   return (
      <div
         style={{
            backgroundImage: `linear-gradient(
    to bottom,
  rgba(0, 0, 0, 0.9),
   rgba(0, 0, 0, 0.9)
  ),url(${imageTt?.cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
         }}
         className="tomorrow-tunes"
      >
         <div className="tomorrow-tunes__box">
            <div className="tomorrow-tunes__upper-part">
               <div className="tomorrow-tunes__upper-img-box">
                  <img
                     className="tomorrow-tunes__upper-img"
                     src={playlistTt[0]?.cover}
                     alt="cover image"
                  />
               </div>

               <div className="tomorrow-tunes__upper-texts-box">
                  <div className="tomorrow-tunes__upper-texts-headers">
                     <h2>Faaji xpress</h2>
                     <p>
                        Listen to the artists taking afrobeats movement to the global stage with
                        with full force
                     </p>
                     <span>{playlistTt?.length} songs - 16hrs</span>
                  </div>
                  <ul className="tomorrow-tunes__upper-icons-box">
                     <li
                        onClick={() => {
                           dispatch(addSongsToList(playlistTt));
                           dispatch(addCurTrack(0));
                        }}
                     >
                        <span>
                           <img src="/src/assets/mp-play.svg" alt="" />
                        </span>
                        Play all
                     </li>
                     <li>
                        <span>
                           <img src="/src/assets/add-to-col.svg" alt="" />
                        </span>{" "}
                        Add to collection
                     </li>
                     <li>
                        <span>
                           <img src="/src/assets/add-to-hrt.svg" alt="" />
                        </span>
                        Like
                     </li>
                  </ul>
               </div>
            </div>

            <ul className="tomorrow-tunes__lower-part">
               {isFetching ? (
                  <Loading size={"3"} />
               ) : (
                  playlistTt?.map((song, index) => {
                     return (
                        <li
                           onClick={() => {
                              dispatch(addSongsToList(playlistTt));
                              dispatch(addCurTrack(index));
                           }}
                           key={song.id}
                           className="tomorrow-tunes__lower-part-list"
                        >
                           <div className="tomorrow-tunes__lower-img-box">
                              <img
                                 className="tomorrow-tunes__lower-img"
                                 src={song.cover}
                                 alt="cover image"
                              />
                              <img src="/src/assets/tt-icon.svg" alt="" />
                           </div>

                           <div className="tomorrow-tunes__lower-texts-box">
                              <span>
                                 {song.title} ~ {song.artist}
                              </span>
                              <span>Single</span>
                           </div>

                           <div className="tomorrow-tunes__lower-time-box">
                              <span>{song.duration}</span>
                              <img src="/src/assets/tt-more-vertical.svg" alt="" />
                           </div>
                        </li>
                     );
                  })
               )}
               {error ? <div>There's an error, try again</div> : ""}
            </ul>
         </div>
      </div>
   );
}

export default FaajiXpress;
