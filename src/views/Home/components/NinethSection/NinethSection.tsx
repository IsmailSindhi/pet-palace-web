import Image from 'next/image';

const NinethSection = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="flex justify-center items-center mt-[88px]">
        <span className="text-2xl font-extrabold">Naše značky</span>
      </div>
      <div className="flex flex-row gap-4 md:gap-9 justify-center items-center  lg:gap-[131px] mt-[60px] xl:mx-[197px]">
        <div className="">
          <Image src="/Group 99.png" alt="me" width={145} height={15} />
        </div>
        <div className=" ">
          <Image src="/Group 99.png" alt="me" width={145} height={15} />
        </div>
        <div className="hidden md:block">
          <Image src="/Group 99.png" alt="me" width={145} height={15} />
        </div>
        <div className="hidden lg:block">
          <Image src="/Group 99.png" alt="me" width={145} height={15} />
        </div>
      </div>
    </div>
  );
};

export default NinethSection;
