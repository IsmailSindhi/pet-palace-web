import Image from 'next/image';
import Bottom from './components/Bottom';
import Mid from './components/Mid';
import Top from './components/Top';
const TopBar = () => {
  return (
    <div>
      {/* TopBar */}
      {/* <div className="absolute left-[50%] lg:left-[48.5%] lg:top-[46px]"> */}
      <div className="absolute top-9 left-[44%] md:left-[48.5%] lg:top-[46px] lg:left-[48.5%]">
        <Image src="/Path 120.png" alt="me" width={41} height={35} />
      </div>
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
};

export default TopBar;
