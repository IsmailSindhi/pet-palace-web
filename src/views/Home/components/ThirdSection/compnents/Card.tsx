import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[261px]">
      <span className="text-[32px] font-extrabold">1-2</span>
      <span className="text-[14px] w-[150px] h-[39px] text-center mt-[6px]">
        Doručenie do 1-2 pracovných dní
      </span>
      <div className="mt-[2px]">
        <Image src="/Line 40.png" alt="me" width={27} height={2} />
      </div>
    </div>
  );
};

export default Card;
