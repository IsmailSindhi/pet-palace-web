import Image from 'next/image';
import Card from './componets/Card';

const SeventhSection = () => {
  return (
    <div>
      <div className="flex justify-center mt-8 lg:mt-[120px]">
        <span className="text-2xl font-bold text-blactext">Blog</span>
      </div>
      <div className="flex flex-wrap justify-center items-center xl:flex-row xl:mx-[139px] gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="absolute left-[52.7vw] mt-[40px]">
        <Image src="/Path 137.png" alt="me" width={40} height={40} />
      </div>
      <div className="flex justify-center items-center mt-[76px]">
        <span className="text-sm font-black text-bluetext">
          Pozrieť ďalšie blogy
        </span>
      </div>
    </div>
  );
};

export default SeventhSection;
