import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AriyaTunes from "./components/AriyaTunes";
import FaajiXpress from "./components/FaajiXpress";
import FreshTunes from "./components/FreshTunes";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MusicPlayerBoard from "./components/MusicPlayerBoard";
import MyCollection from "./components/MyCollection";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import SearchOverlay from "./components/SearchOverlay";
import TomorrowTunes from "./components/TomorrowTunes";
import StateContext from "./StateContext";
import { useSelector } from "react-redux";

function App() {
   const { songsList, curTrack } = useSelector(state => state.player);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [accessToken, setAccessToken] = useState("");

   const [hasEnded, setHasEnded] = useState(false);
   const [title, setTitle] = useState("");
   const [artistName, setArtistName] = useState("");
   const [artistImg, setArtistImg] = useState("");
   const [length, setLength] = useState(0);
   const [time, setTime] = useState(0);
   const [slider, setSlider] = useState(0);
   const [volume, setVolume] = useState(1.0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [audio, setAudio] = useState(null);

   const path = useLocation();

   useEffect(() => {
      if (songsList.length) {
         const audio = new Audio(songsList[curTrack].audio);
         setAudio(audio);
      }
   }, [songsList, curTrack]);

   useEffect(() => {
      if (audio != null) {
         const getAudioDuration = () => {
            setLength(audio.duration);
         };

         const getAudioCurrentTime = () => {
            const curTime = audio.currentTime;
            setTime(curTime);
            setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
         };

         const getAudioVolume = () => setVolume(audio.volume);

         const getAudioEnd = () => {
            setHasEnded(!hasEnded);
         };

         audio.addEventListener("loadeddata", getAudioDuration);
         audio.addEventListener("timeupdate", getAudioCurrentTime);
         audio.addEventListener("volumechange", getAudioVolume);
         audio.addEventListener("ended", getAudioEnd);
         setTitle(songsList[curTrack]?.title);
         setArtistName(songsList[curTrack]?.artist);
         setArtistImg(songsList[curTrack]?.cover);
         setIsPlaying(true);

         return () => {
            audio.pause();
            setSlider(0);
         };
      }
   }, [audio]);

   var authOptions = {
      method: "POST",
      headers: {
         "Content-type": "application/x-www-form-urlencoded"
      },
      body:
         "grant_type=client_credentials&client_id=" +
         import.meta.env.VITE_VERY_PRIVATE_ID +
         "&client_secret=" +
         import.meta.env.VITE_VERY_PRIVATE_SECRET
   };

   useEffect(() => {
      async function getToken() {
         try {
            const response = await fetch("https://accounts.spotify.com/api/token", authOptions);
            const data = await response.json();
            const { access_token } = data;
            setAccessToken(access_token);
         } catch (e) {
            console.log(e.message);
         }
      }
      getToken();
   }, []);

   useEffect(() => {
      setIsMenuOpen(false);
   }, [path]);

   useEffect(() => {
      if (isMenuOpen || isSearchOverlayOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
   }, [isMenuOpen, isSearchOverlayOpen]);

   useEffect(() => {
      if (audio != null) {
         document.body.style.paddingBottom = "12rem";
      } else {
         document.body.style.paddingBottom = "1.5rem";
      }
   }, [audio]);

   return (
      <StateContext.Provider
         value={{
            isMenuOpen,
            setIsMenuOpen,
            setIsSearchOverlayOpen,
            accessToken,
            windowWidth
         }}
      >
         <Header />
         <NavBar />
         <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/my-collection" element={<MyCollection />} />
            <Route path="/tomorrow-tunes/:id" element={<TomorrowTunes />} />
            <Route path="faaji-xpress/:id" element={<FaajiXpress />} />
            <Route path="/fresh-tunes/:id" element={<FreshTunes />} />
            <Route path="/ariya-tunes/:id" element={<AriyaTunes />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <CSSTransition
            timeout={300}
            in={isSearchOverlayOpen}
            classNames="search-overlay"
            unmountOnExit
         >
            <SearchOverlay />
         </CSSTransition>
         {audio != null && (
            <MusicPlayerBoard
               hasEnded={hasEnded}
               title={title}
               artistName={artistName}
               artistImg={artistImg}
               length={length}
               time={time}
               slider={slider}
               volume={volume}
               audio={audio}
               setHasEnded={setHasEnded}
               isPlaying={isPlaying}
               setIsPlaying={setIsPlaying}
            />
         )}
      </StateContext.Provider>
   );
}

export default App;
