import Card from './componets/Card';

const SeventhSection = () => {
  return (
    <div>
      <div className="flex justify-center mt-8 lg:mt-[120px]">
        <span className="text-2xl font-bold text-blactext">Blog</span>
      </div>
      <div className="flex flex-wrap justify-center items-center xl:flex-row xl:mx-[139px] gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SeventhSection;
