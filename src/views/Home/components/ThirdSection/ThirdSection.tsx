import Card from './compnents/Card';

const ThirdSection = () => {
  return (
    // <div className="flex flex-col items-center justify-center gap-[15px] mt-5 lg:mt-[76px] ">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[15px] mt-5 lg:mt-[76px] ">
      <div>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default ThirdSection;
