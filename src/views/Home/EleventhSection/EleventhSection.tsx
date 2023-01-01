const EleventhSection = () => {
  return (
    <div className="bg-[#0095a8] rounded-lg mt-[124px] flex flex-col justify-center items-center text-center lg:text-left lg:mx-[139px] lg:flex-row lg:justify-between">
      <div className="flex flex-col mt-[69px]">
        <div className="">
          <span className="text-2xl font-extrabold text-white">
            Získajte uvítaciu zľavu
          </span>
        </div>
        <div className="mt-[7px] w-[332px] text-sm text-white">
          <span className="">
            Prihláste sa do nášho newslettra a nenechajte si ujsť skvelé novinky
          </span>
        </div>
      </div>
      <div className="mt-[78px]">
        <div className="flex justify-between border rounded-full border-white h-[50px] w-[90%] lg:w-[450px]">
          <input
            type="text"
            placeholder="Zadajte váš email"
            className="bg-transparent placeholder:text-white ml-[25px] mt-[19px] mb-[15px] w-3/4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white mr-[20px] my-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div>
          <ul className="list-disc mt-[13px]">
            <li className="text-white text-xs lg:w-[261px]">
              <span className="text-center">
                Prihlásením do newslettra súhlasíte s Všeobecnými obchodnými
                podmienkami
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EleventhSection;
