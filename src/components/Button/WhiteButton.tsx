interface IwhiteButtonProps {
  data: string;
}

const WhiteButton: React.FC<IwhiteButtonProps> = ({ data }) => {
  return (
    <button>
      <div className="bg-white flex items-center justify-center h-[30px] w-[158px] rounded-full">
        <span className="text-xs">{data}</span>
      </div>
    </button>
  );
};

export default WhiteButton;
