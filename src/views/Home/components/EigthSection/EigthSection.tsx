import Image from 'next/image';

const EigthSection = () => {
  return (
    <div className="flex flex-col mt-[51px] justify-center items-center xl:gap-[108px] lg:flex-row xl:mx-[138px] lg:mx-[100px]">
      <div className="flex flex-col items-center lg:items-start lg:mt-[56px]">
        <div className="w-[277px]">
          <span className="w-[277px] font-bold text-blactext text-2xl">
            Záleží nám na ekológii
          </span>
        </div>
        <div className="flex flex-col items-center mx-4 lg:mx-0 lg:items-start lg:w-[400px] xl:w-[462px] mt-[14px]">
          <span className="text-blacktint text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            justo orci, accumsan imperdiet dapibus ultrices, fermentum et urna.
            Sed lectus quam, pulvinar at libero et, ullamcorper gravida dolor.
            Pellentesque turpis massa, commodo et maximus nec, rutrum varius
            est. Integer quis aliquam purus.
          </span>
        </div>
      </div>
      <div className="">
        <div className="relative">
          <div className="absolute left-[18.8%] top-[55.6%] z-10">
            <Image src="/leaf-outline.png" alt="me" width={32} height={29} />
          </div>
          <div className="absolute right-[11.9%] top-[66.4%] z-10">
            <Image src="/leaf-outline.png" alt="me" width={17} height={16} />
          </div>
          <div className="relative">
            <Image src="/pes_green.png" alt="me" width={531} height={453} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EigthSection;
