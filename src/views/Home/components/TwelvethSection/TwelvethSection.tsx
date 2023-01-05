import Image from 'next/image';

const TwelvethSection = () => {
  return (
    <div className="mt-5 lg:mx-[139px] lg:mt-[80px]">
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-0 lg:justify-between lg:flex-row ">
        <div>
          <h1 className="text-2xl font-extrabold text-blactext">
            Svet Pet Palace
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-sm font-extrabold text-primaryshade">
            Navštíviť Instagram #pet_palace
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-primaryshade"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="mt-[48px] flex flex-col gap-4 justify-center items-center lg:flex-row">
        <div>
          <Image src="/doggg.png" alt="me" width={260} height={260} />
        </div>
        <div>
          <Image src="/doggg.png" alt="me" width={260} height={260} />
        </div>
        <div>
          <Image src="/doggg.png" alt="me" width={260} height={260} />
        </div>
        <div>
          <Image src="/doggg.png" alt="me" width={260} height={260} />
        </div>
      </div>
    </div>
  );
};

export default TwelvethSection;
