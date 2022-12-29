import TopBar from '@components/TopBar';
import FifthSection from './components/FifthSection/FifthSection';
import FourthSection from './components/FourhSection/FourthSection';
import HeroSection from './components/HeroSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import SixthSection from './components/SixthSection/SixthSection';
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
    </>
  );
};

export default Home;
