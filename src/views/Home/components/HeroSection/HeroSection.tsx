import WhiteButton from '@components/Button/WhiteButton';

const HeroSection = () => {
  return (
    <div className="bg-[url('/pes_background.png')] bg-cover h-[420px] mt-2 lg:mt-0">
      <div className="lg:pl-[139px] lg:pt-[137px]">
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <span className=" text-white text-3xl lg:text-[32px] font-black m-9 lg:m-0">
            To najlepšie <br></br> pre vášho miláčika
          </span>
          <span className="text-white text-[14px] text-center lg:text-left  lg:w-[305px] my-4 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <div className="my-[18px]">
            <WhiteButton data="Kúpiť produkt" />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center mt-10 lg:mt-6">
        <Image src="/Group 103.png" alt="me" width={106} height={12} />
      </div> */}
    </div>
  );
};

export default HeroSection;
