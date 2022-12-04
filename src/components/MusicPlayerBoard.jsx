import { addCurTrack } from "@/redux/features/playerSlice";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function MusicPlayerBoard({
   hasEnded,
   title,
   artistName,
   artistImg,
   length,
   time,
   slider,
   volume,
   audio,
   setHasEnded,
   isPlaying,
   setIsPlaying
}) {
   const fmtMSS = s => new Date(1000 * s).toISOString().substring(15, 19);
   const songsList = useSelector(state => state.player.songsList);
   const curTrack = useSelector(state => state.player.curTrack);
   const dispatch = useDispatch();
   const progressRef = useRef(null);
   const volumeRef = useRef(null);
   const [shuffleSongs, setShuffleSongs] = useState(false);
   const [repeatSong, setRepeatSong] = useState(false);

   useEffect(() => {
      if (audio != null) {
         if (isPlaying) {
            audio.play();
         } else {
            audio.pause();
         }
      }
   }, [audio, isPlaying]);

   useEffect(() => {
      if (hasEnded && repeatSong) {
         audio.currentTime = 0;
         audio.play();
      }

      if (hasEnded && !repeatSong) {
         next();
      }

      if (hasEnded && shuffleSongs && !repeatSong) {
         shuffle();
      }

      if (hasEnded && shuffleSongs && repeatSong) {
         audio.currentTime = 0;
         audio.play();
      }
      setHasEnded(false);
   }, [hasEnded]);

   useEffect(() => {
      if (audio != null) {
         audio.volume = volume;
      }
   }, [volume]);

   const progressFunc = e => {
      const width = progressRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
   };

   const volumeFunc = e => {
      const width = volumeRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      audio.volume = (clickX / width) * 1;
   };

   const shuffle = () => {
      const random = Math.floor(Math.random() * songsList.length);
      dispatch(addCurTrack(random));
   };

   const next = () => {
      if (shuffleSongs || (shuffleSongs && repeatSong)) {
         shuffle();
         setRepeatSong(false);
         return;
      }
      if (curTrack === songsList.length - 1) {
         dispatch(addCurTrack(0));
      } else {
         dispatch(addCurTrack(curTrack + 1));
      }
   };

   const previous = () => {
      if (shuffleSongs || (shuffleSongs && repeatSong)) {
         shuffle();
         setRepeatSong(false);
         return;
      }
      if (curTrack === 0) {
         dispatch(addCurTrack(songsList.length - 1));
      } else {
         dispatch(addCurTrack(curTrack - 1));
      }
   };

   return (
      <div className="music-player-board">
         <div className="music-player-board__box">
            <div className="music-player-board__img-box">
               <img src={artistImg ? artistImg : ""} alt="" />
               <div>
                  <h2>{title ? title : ""}</h2>
                  <span>{artistName ? artistName : ""}</span>
               </div>
            </div>

            <div className="music-player-board__mobile">
               <img
                  onClick={previous}
                  className="music-player-board__prev-mobile"
                  src="/mp-previous.svg"
                  alt=""
               />

               <div className="music-player-board__play-pause-box">
                  {isPlaying ? (
                     <img
                        onClick={() => setIsPlaying(false)}
                        className="music-player-board__pause-mobile"
                        src="/mp-pause.svg"
                        alt=""
                     />
                  ) : (
                     <img
                        onClick={() => setIsPlaying(true)}
                        className="music-player-board__play-mobile"
                        src="/mp-play.svg"
                        alt=""
                     />
                  )}
               </div>

               <img
                  onClick={next}
                  className="music-player-board__next-mobile"
                  src="/mp-next.svg"
                  alt=""
               />
            </div>

            <div className="music-player-board__play-box">
               <div className="music-player-board__icons">
                  <span
                     onClick={() => setShuffleSongs(!shuffleSongs)}
                     className="music-player-board__shuffle"
                  >
                     <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M14.5001 12.7593C14.5001 12.746 14.4935 12.7326 14.4935 12.7193C14.4868 12.666 14.4801 12.6126 14.4601 12.566C14.4335 12.506 14.4001 12.4593 14.3601 12.4126C14.3601 12.4126 14.3601 12.406 14.3535 12.406C14.3068 12.3593 14.2535 12.326 14.1935 12.2993C14.1335 12.2726 14.0668 12.2593 14.0001 12.2593L10.8868 12.2726C10.8868 12.2726 10.8868 12.2726 10.8801 12.2726C10.4801 12.2726 10.0935 12.086 9.85348 11.766L9.04015 10.7193C8.87348 10.4993 8.56015 10.4593 8.34015 10.6326C8.12015 10.806 8.08015 11.1126 8.25348 11.3326L9.06681 12.3793C9.50015 12.9393 10.1801 13.2726 10.8868 13.2726H10.8935L12.7935 13.266L12.3201 13.7393C12.1268 13.9326 12.1268 14.2526 12.3201 14.446C12.4201 14.546 12.5468 14.5926 12.6735 14.5926C12.8001 14.5926 12.9268 14.546 13.0268 14.446L14.3601 13.1126C14.4068 13.066 14.4401 13.0126 14.4668 12.9526C14.4868 12.886 14.5001 12.8193 14.5001 12.7593Z"
                           fill="white"
                        />
                        <path
                           d="M5.61333 5.23263C5.18 4.63263 4.48667 4.2793 3.74667 4.2793C3.74 4.2793 3.74 4.2793 3.73333 4.2793L2 4.28596C1.72667 4.28596 1.5 4.51263 1.5 4.78596C1.5 5.0593 1.72667 5.28596 2 5.28596L3.74 5.2793H3.74667C4.16667 5.2793 4.56 5.4793 4.8 5.8193L5.52 6.8193C5.62 6.95263 5.77333 7.02596 5.92667 7.02596C6.02667 7.02596 6.13333 6.99263 6.22 6.93263C6.44667 6.76596 6.49333 6.45263 6.33333 6.23263L5.61333 5.23263Z"
                           fill="white"
                        />
                        <path
                           d="M14.4933 4.826C14.4933 4.81267 14.5 4.79933 14.5 4.79267C14.5 4.726 14.4867 4.65933 14.46 4.59933C14.4333 4.53933 14.4 4.486 14.3533 4.43933L13.02 3.106C12.8267 2.91267 12.5067 2.91267 12.3133 3.106C12.12 3.29933 12.12 3.61933 12.3133 3.81267L12.7867 4.286L10.9667 4.27933C10.96 4.27933 10.96 4.27933 10.9533 4.27933C10.1867 4.27933 9.46667 4.65933 9.04 5.306L4.78 11.6927C4.54 12.0527 4.13333 12.2727 3.7 12.2727H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0327 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85267C10.1267 5.49267 10.5333 5.27267 10.9667 5.27267H10.9733L14 5.286C14.0667 5.286 14.1267 5.27267 14.1933 5.246C14.2533 5.21933 14.3067 5.186 14.3533 5.13933C14.3533 5.13933 14.3533 5.13267 14.36 5.13267C14.4 5.086 14.44 5.03933 14.46 4.97933C14.48 4.93267 14.4867 4.87933 14.4933 4.826Z"
                           fill={`${shuffleSongs ? "#face66" : "white"}`}
                        />
                     </svg>
                  </span>
                  <img
                     onClick={previous}
                     className="music-player-board__prev"
                     src="/mp-previous.svg"
                     alt=""
                  />
                  <div className="music-player-board__play-pause-box">
                     {isPlaying ? (
                        <img
                           onClick={() => setIsPlaying(false)}
                           className="music-player-board__pause"
                           src="/mp-pause.svg"
                           alt=""
                        />
                     ) : (
                        <img
                           onClick={() => setIsPlaying(true)}
                           className="music-player-board__play"
                           src="/mp-play.svg"
                           alt=""
                        />
                     )}
                  </div>
                  <img
                     onClick={next}
                     className="music-player-board__next"
                     src="/mp-next.svg"
                     alt=""
                  />
                  <span
                     onClick={() => setRepeatSong(!repeatSong)}
                     className="music-player-board__repeat"
                  >
                     <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M2.60659 12.226C2.47992 12.226 2.35325 12.1793 2.25325 12.0793C1.33992 11.1593 0.833252 9.94599 0.833252 8.65932C0.833252 5.98599 2.99992 3.81266 5.66659 3.81266L9.71325 3.82599L8.98659 3.13266C8.78659 2.93932 8.77992 2.62599 8.97325 2.42599C9.16659 2.22599 9.47992 2.21932 9.67992 2.41266L11.3066 3.97266C11.4533 4.11266 11.4999 4.33266 11.4266 4.51932C11.3533 4.70599 11.1666 4.83266 10.9599 4.83266L5.66659 4.81932C3.55325 4.81932 1.83325 6.54599 1.83325 8.66599C1.83325 9.68599 2.23325 10.6527 2.95992 11.3793C3.15325 11.5727 3.15325 11.8927 2.95992 12.086C2.85992 12.1793 2.73325 12.226 2.60659 12.226Z"
                           fill="white"
                        />
                        <path
                           d="M6.6666 15.2727C6.53993 15.2727 6.41993 15.226 6.31993 15.1327L4.69327 13.5727C4.5466 13.4327 4.49993 13.2127 4.57327 13.026C4.65327 12.8393 4.83993 12.7393 5.03993 12.7127L10.3399 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.87933C14.1733 7.85933 13.7733 6.89266 13.0466 6.166C12.8533 5.97266 12.8533 5.65266 13.0466 5.45933C13.2399 5.266 13.5599 5.266 13.7533 5.45933C14.6666 6.37933 15.1733 7.59266 15.1733 8.87933C15.1733 11.5527 13.0066 13.726 10.3399 13.726L6.29327 13.7127L7.01993 14.406C7.21993 14.5993 7.2266 14.9127 7.03327 15.1127C6.9266 15.2193 6.79993 15.2727 6.6666 15.2727Z"
                           fill="white"
                        />
                        <path
                           d="M8.16675 11.0527C7.89341 11.0527 7.66675 10.826 7.66675 10.5527V8.29267L7.54008 8.43267C7.35341 8.63934 7.04008 8.65267 6.83341 8.47267C6.62675 8.29267 6.61341 7.97267 6.79341 7.766L7.79341 6.65267C7.93341 6.49934 8.15341 6.446 8.34675 6.51934C8.54008 6.59934 8.66675 6.77934 8.66675 6.99267V10.5593C8.66675 10.8327 8.44008 11.0527 8.16675 11.0527Z"
                           fill="white"
                           fillOpacity={`${repeatSong ? "1" : "0"}`}
                        />
                     </svg>
                  </span>
               </div>
               <div className="music-player-board__volume">
                  <img src="/volume-high.svg" alt="" />
                  <div
                     onClick={volumeFunc}
                     ref={volumeRef}
                     className="music-player-board__volume-status"
                  >
                     <span style={{ width: Math.trunc(volume * 100) + "%" }}></span>
                  </div>
               </div>

               <div className="music-player-board__music-duration ">
                  <span className=" music-player-board__current-time">
                     {!time ? "0:00" : fmtMSS(time)}
                  </span>
                  <div
                     onClick={progressFunc}
                     ref={progressRef}
                     className="music-player-board__play-status"
                  >
                     <span
                        style={{ width: `${slider}%` }}
                        className="music-player-board__play-width-update"
                     ></span>
                     <div className="music-player-board__play-width-rb">
                        <span></span>
                     </div>
                  </div>
                  <span className="music-player-board__duration">
                     {!length ? "0:00" : fmtMSS(length)}
                  </span>
               </div>
            </div>
         </div>
         <div className="music-progress-mobile">
            <span style={{ width: `${slider}%` }}></span>
         </div>
      </div>
   );
}

export default MusicPlayerBoard;
