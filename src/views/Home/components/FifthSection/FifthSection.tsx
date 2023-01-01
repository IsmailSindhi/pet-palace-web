import Button from '@components/Button';
import Image from 'next/image';

function FifthSection() {
  return (
    <div className="flex flex-col justify-center lg:flex-row xl:ml-[90px] xl:mr-[149px]">
      <div className="flex justify-center items-center lg:mx-0 mt-2">
        <Image src="/dogy.png" alt="me" width={386} height={520} />
      </div>
      <div className="hidden lg:block lg:absolute  lg:left-[73.5vw] lg:mt-[61px]">
        <Image src="/r-line.png" alt="me" width={85} height={86} />
      </div>
      <div className="mt-2 lg:mt-[200px] xl:mt-[222px] lg:ml-8 xl:ml-[156px]">
        <div className="h-[54px] md:w-[337px] flex justify-center items-center mx-auto lg:mx-0">
          <span className="text-[24px] text-center lg:text-left text-blactext font-black">
            Hračky Toys, ktoré vyrastú s vašim miláčikom
          </span>
        </div>
        <div className="text-center lg:w-[462px] mt-[15px] lg:h-[45px] lg:text-left">
          <span className="text-sm text-blactext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget commodo lectus. Phasellus quis tempor quam.
          </span>
        </div>
        <div className="flex justify-center items-center mt-[33px] w-[100px] mx-auto lg:mx-0">
          <Button
            text="Viac info"
            w="100px"
            h="30px"
            pt="6px"
            pr="9px"
            pb="11px"
            pl="10px"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
