import CuratedPlaylist from "./CuratedPlaylist";
import FreshNewMusicSection from "./FreshNewMusicSection";
import JumpBackInSection from "./JumpBackInSection";
import NewReleaseSection from "./NewReleaseSection";
import PopularNewReleaseSection from "./PopularNewReleasesSection";
import TopCharts from "./TopCharts";

function HeroSection() {
   return (
      <div className="hero__section">
         <div>
            <div className="container">
               <div className="hero">
                  <CuratedPlaylist />
                  <TopCharts />
                  <NewReleaseSection />
                  <JumpBackInSection />
                  <PopularNewReleaseSection />
                  <FreshNewMusicSection />
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeroSection;
