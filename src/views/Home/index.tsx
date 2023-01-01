import TopBar from '@components/TopBar';
import EleventhSection from './EleventhSection/EleventhSection';
import EigthSection from './components/EigthSection/EigthSection';
import FifthSection from './components/FifthSection/FifthSection';
import FourthSection from './components/FourhSection/FourthSection';
import HeroSection from './components/HeroSection';
import NinethSection from './components/NinethSection/NinethSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import SixthSection from './components/SixthSection/SixthSection';
import TenthSection from './components/TenthSection/TenthSection';
import ThirdSection from './components/ThirdSection';

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
    </>
  );
};

export default Home;
