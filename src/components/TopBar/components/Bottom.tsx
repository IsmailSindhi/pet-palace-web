import Image from 'next/image';
import Link from 'next/link';

const Bottom = () => {
  const links = [
    'Krmivo',
    'Obojky',
    'Postroje',
    'Vôdzky',
    'Hračky',
    'Hygiena',
    'Príslušenstvo',
  ];
  return (
    // <div className="mt-5 mx-[139px] flex  justify-between items-center">
    <div className="flex justify-center mx-5 lg:justify-between items-center lg:mt-5 lg:mx-[139px]">
      <div className="hidden lg:flex my-2">
        <ul className="flex flex-row gap-4 xl:gap-8 ">
          {links.map(function (link, i) {
            return (
              <li key={i}>
                <Link href="/">
                  <span className="text-blacktint">{link}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center md:pl-2">
        <div className="flex flex-row  items-center justify-between  border border-black rounded-full xl:w-[350px] xl:h-fit ">
          <div className=" md:ml-[17px]">
            <input
              className="h-[15px] w-[90%] md:w-[200px] lg:w-full xl:w-[256px] mx-3"
              placeholder="Hľadajte krmivo, hračky, ..."
            ></input>
          </div>
          <div className="pr-[15px] pt-[7px]">
            <Image src="/search.png" alt="me" width={16} height={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
