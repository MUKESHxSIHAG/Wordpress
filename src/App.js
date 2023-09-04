import './assets/css/Root.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WordpressNavBar from './Components/WordpressNavBar';
import HeaderSection from './Components/HeaderSection';
import TellusMore from './Components/TellusMore';
import Featuredon from './Components/Featuredon';
import IntegerSection from './Components/IntegerSection';
import VipeStudio from './Components/VipeStudio';
import PartnershipSection from './Components/PartnershipSection';
import AgileWordpress from './Components/AgileWordpress';
import StarTeam from './Components/StarTeam';
import FooterSection from './Components/FooterSection';
import SuccessGuides from './Components/SuccessGuides';
import Preloader from './Components/Preloader';
import BackToTop from './Components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='overflow-hidden'>
      <Preloader />
      {/* <WordpressNavBar /> */}
      <HeaderSection />
      <TellusMore />
      <Featuredon />
      <IntegerSection />
      <VipeStudio />
      <PartnershipSection />
      <AgileWordpress />
      <StarTeam />
      <SuccessGuides />
      <FooterSection />
      <BackToTop />


    </div>
  );
}

export default App;
