import Button from '@components/Button';

const FourthSection = () => {
  const data = [
    {
      name: 'Hunter',
      description: 'Pelech pre psy 100 x 80 cm',
      prize: '80,00',
      currency: '€',
      image: '/e_nF3JJq_69282_.png',
    },
    {
      name: 'Weely Wally',
      description: 'Domček pre psy',
      prize: '399,00',
      currency: '€',
      image: '/3375097.6074104.png',
    },
    {
      name: 'Acana',
      description: 'Dog Grass-Fed Lamb Singles 17kg',
      prize: '110,00',
      currency: '€',
      image: '/1ebbe1d54a4c665.png',
    },
    {
      name: 'Hunter',
      description: 'Pelech pre psy 100 x 80 cm',
      prize: '80,00',
      currency: '€',
      image: '/e_nF3JJq_69282_.png',
    },
  ];
  return (
    <div className="mx-[139px]">
      <div className="flex justify-center mt-[90px] mb-[62px]">
        <span className="text-[26px] text-center  text-blactext font-black">
          Najpredávane
        </span>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {data.map(function (
          item // name: string, // description: string, // prize: string, // currency: string, // image: string
        ) {
          return (
            <div key={item.name}>
              <div className="bg-[#F8F8F8] flex flex-col justify-between items-center w-[260px] h-[300px] rounded-lg">
                <div className="mt-[38px]">
                  <img src={item.image} alt={item.name} className=""></img>
                </div>
                <div className="flex flex-col gap-1 items-center mb-[10px]">
                  <span className="text-sm font-bold text-blactext">
                    {item.name}
                  </span>
                  <span className="text-xs text-blactext">
                    {item.description}
                  </span>
                  <span className="text-lg text-primaryshade font-bold">
                    {item.prize} {item.currency}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-[51px]">
        <Button
          text="Zobraziť produkty"
          w="158px"
          h="30px"
          pt="6px"
          pr="5px"
          pb="7px"
          pl="6px"
        ></Button>
      </div>
    </div>
  );
};

export default FourthSection;
