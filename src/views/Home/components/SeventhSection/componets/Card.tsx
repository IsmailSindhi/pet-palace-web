const Card = () => {
  return (
    <div className="mt-[45px] flex flex-col">
      <div className="bg-[url('/pes.png')] bg-cover w-[350px] h-[177px] rounded-lg ">
        {/* <Image src="/pes.png" alt="me" width={350} height={200} /> */}
      </div>
      <div className="flex flex-col ml-[18px] mt-[21px]">
        <span className="text-sm font-bold text-blactext w-[261px]">
          Nadpis blogového príspevku
        </span>
        <span className="text-xs w-[221px] mt-[2px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <span className="text-[10px] mt-2 text-[#0095a8]">Čítať celé</span>
      </div>
    </div>
  );
};

export default Card;
