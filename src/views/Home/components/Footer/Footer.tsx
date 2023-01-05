import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-bluetext mt-[135px] lg:px-[139px] text-white text-center lg:text-left">
      <div className="pt-5 lg:pt-[64px] flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between">
        <div>
          <Image src="/Group99k.png" alt="me" width={145} height={15} />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between lg:gap-[134px]">
          <div>
            <h1 className="font-extrabold text-base">ahoj@petpalace.sk</h1>
          </div>
          <div className="font-extrabold text-base">
            <h1>+ 421 949 000 000</h1>
          </div>
        </div>
      </div>
      <div className="mt-[59px] flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:flex-row gap-[118px]">
          <div>
            <div>
              <h1 className="font-extrabold text-sm">Všetko o nákupe</h1>
            </div>
            <div className="mt-[26px] flex flex-col gap-5">
              <h1 className="text-xs">Často kladené otázky</h1>
              <h1 className="text-xs">Spôsob platby a doručenie</h1>
              <h1 className="text-xs">Vrátenia a sťažnosti</h1>
              <h1 className="text-xs">Všeobecné podmienky</h1>
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-extrabold text-sm">O nás</h1>
            </div>
            <div className="mt-[26px] flex flex-col gap-5">
              <h1 className="text-xs">Kontakt</h1>
              <h1 className="text-xs">O nás</h1>
              <h1 className="text-xs">Články</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-4 lg:mt-0">
          <div>
            <Image src="/instagram.png" alt="me" width={21} height={21} />
          </div>
          <div>
            <Image src="/facebook.png" alt="me" width={21} height={21} />
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between mt-5">
        {/* <span dangerouslySetInnerHTML={{ __html: '&copy;' }} /> */}
        <h1 className="text-xs">© 2022 Pet Palace s.r.o.</h1>
        <h1 className="text-xs">Pravidlá ochrany osobných údajov a cookies</h1>
      </div>
    </div>
  );
};

export default Footer;
