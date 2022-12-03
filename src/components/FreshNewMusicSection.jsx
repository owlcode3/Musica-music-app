import { addCurTrack, addSongsToList } from "@/redux/features/playerSlice";
import { useGetPopularMusicQuery } from "@/redux/services/musicaApi";
import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useDispatch } from "react-redux";
import Loading from "./Spinner";

function FreshNewMusicSection() {
   const dispatch = useDispatch();
   const scrollRightRef = useRef(null);
   const { data, isFetching, error } = useGetPopularMusicQuery();
   const [songs, setSongs] = useState([]);
   const [hideNext, setHideNext] = useState(false);
   const [hidePrev, setHidePrev] = useState(true);

   useEffect(() => {
      if (data) {
         setSongs(Array.from(data).reverse());
      }
   }, [data]);

   const scrollIt = toRight => {
      const scrollLength = 300;
      scrollRightRef.current.scrollBy({
         left: scrollLength * (toRight ? 1 : -1),
         behavior: "smooth"
      });
   };

   const scrolled = e => {
      const end = Math.abs(e.target.offsetWidth + e.target.scrollLeft) == e.target.scrollWidth;
      const start = e.target.scrollLeft > 1;

      if (end) {
         setHideNext(true);
      } else {
         setHideNext(false);
      }

      if (start) {
         setHidePrev(false);
      } else {
         setHidePrev(true);
      }
   };

   return (
      <div className="new-release__section">
         <div>
            <div className="container">
               <div className="new-release">
                  <div className="new-release__heading">Fresh new music</div>
                  <ul onScroll={scrolled} className="new-release__box" ref={scrollRightRef}>
                     {isFetching ? (
                        <Loading size={"3"} />
                     ) : (
                        songs.map((song, index) => {
                           return (
                              <li
                                 onClick={() => {
                                    dispatch(addSongsToList(songs));
                                    dispatch(addCurTrack(index));
                                 }}
                                 key={song.id}
                                 className="new-release__card"
                              >
                                 <img src={song?.cover} alt="image cannot be found" />
                                 <div className="new-release__texts">
                                    <h2>{song?.title}</h2>
                                    <span>{song?.artist}</span>
                                 </div>
                              </li>
                           );
                        })
                     )}
                     {error ? <h3>There's an error, try again</h3> : ""}
                  </ul>
               </div>
            </div>
            {songs.length ? (
               <div
                  onClick={() => scrollIt(true)}
                  style={{ display: hideNext ? "none" : "flex" }}
                  className="scroll-next"
               >
                  <GrNext size={25} />
               </div>
            ) : (
               ""
            )}
            {songs.length ? (
               <div
                  onClick={() => scrollIt(false)}
                  style={{ display: hidePrev ? "none" : "flex" }}
                  className="scroll-prev"
               >
                  <GrPrevious size={25} />
               </div>
            ) : (
               ""
            )}
         </div>
      </div>
   );
}

export default FreshNewMusicSection;
