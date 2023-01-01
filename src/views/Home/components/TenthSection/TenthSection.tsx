import Button from '@components/Button';
import Image from 'next/image';

const TenthSection = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-14 justify-center lg:mt-[155px] lg:mx-[100px] xl:mx-[139px]">
      <div className="flex flex-col items-center lg:items-start lg:mt-[38px]">
        <span className="text-2xl font-extrabold text-blactext">Kto sme</span>
        <span className="mt-[23px] text-sm text-blacktint lg:w-[462px] text-center lg:text-left mx-4 lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          commodo lectus. Phasellus quis tempor quam. Donec condimentum, enim
          eget rhoncus porttitor, justo dui ultricies purus, non rhoncus nunc
          enim quis metus.
        </span>
        <div className="mt-8 lg:mt-[56px]">
          <Button
            text="Viac o nás"
            w="100px"
            h="30px"
            pt="6px"
            pr="9px"
            pb="11px"
            pl="10px"
          ></Button>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Image src="/dog.png" alt="me" width={674} height={293} />
      </div>
    </div>
  );
};

export default TenthSection;
