import Image from 'next/image';

const Mid = () => {
  return (
    // <div className="flex flex-col mx-[139px] pt-[29px] justify-between ">
    <div className="flex flex-col items-center mt-16 lg:mt-0 lg:mx-[139px] lg:pt-[29px] lg:justify-between lg:flex-row">
      <div>
        <Image src="/Group 100.png" alt="me" width={145} height={15} />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-[77px]">
        {/* <div className="flex gap-[77px] "> */}
        <div className="flex gap-2 lg:gap-4 lg:items-center">
          <div>
            <Image src="/call-outline.png" alt="me" width={13} height={13} />
          </div>
          <span className="text-xs text-blacktint">+421 900 000 000</span>
        </div>

        <div className="flex items-center justify-center gap-5">
          {/* <div className="flex gap-6"> */}
          <div>
            <Image src="/basket-outline.png" alt="me" width={20} height={17} />
          </div>
          <div>
            <Image src="/person-outline.png" alt="me" width={15} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
