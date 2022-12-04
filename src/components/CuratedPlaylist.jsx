import React from "react";

function CuratedPlaylist() {
   return (
      <div className="curated-playlist">
         <div className="curated-playlist__box">
            <img className="curated-playlist__icon-glitter" src="/Vector.svg" alt="" />
            <img className="curated-playlist__icon-img" src="/cp-photo.svg" alt="" />
            <div className="curated-playlist__texts">
               <h2 className="curated-playlist__heading">Curated playlist</h2>
               <div className="curated-playlist__genre">
                  <h1>R & B Hits</h1>
                  <p>
                     <span>All mine, Lie again, Petty call me everyday,</span>
                     <span>Out of time, No love, Bad habit,</span>
                     <span>and so much more</span>
                  </p>
               </div>

               <div className="curated-playlist__user-likes">
                  <div className="curated-playlist__users">
                     <img className="curated-playlist__icon-user" src="/Josh.svg" alt="" />
                     <img className="curated-playlist__icon-user" src="/Raheem.svg" alt="" />
                     <img className="curated-playlist__icon-user" src="/Gabriel.svg" alt="" />
                     <img className="curated-playlist__icon-user" src="/Anna.svg" alt="" />
                     <img className="curated-playlist__icon-user" src="/Isabella.svg" alt="" />
                  </div>

                  <div className="curated-playlist__likes">
                     <img className="curated-playlist__icon-heart" src="/Heart-grey.svg" alt="" />
                     <span>33k</span> <span>likes</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CuratedPlaylist;
