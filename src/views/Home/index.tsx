import TopBar from '@components/TopBar';
import EigthSection from './components/EigthSection/EigthSection';
import FifthSection from './components/FifthSection/FifthSection';
import Footer from './components/Footer';
import FourthSection from './components/FourhSection/FourthSection';
import EleventhSection from './components/FourhSection/components/EleventhSection/EleventhSection';
import HeroSection from './components/HeroSection';
import NinethSection from './components/NinethSection/NinethSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import SixthSection from './components/SixthSection/SixthSection';
import TenthSection from './components/TenthSection/TenthSection';
import ThirdSection from './components/ThirdSection';
import TwelvethSection from './components/TwelvethSection/TwelvethSection';

const Home = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <NinethSection />
      <TenthSection />
      <EleventhSection />
      <TwelvethSection />
      <Footer />
    </>
  );
};

export default Home;
