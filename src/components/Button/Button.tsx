interface IButtonProps {
  text: string;
  w: string;
  h: string;
  pt: string;
  pr: string;
  pb: string;
  pl: string;
}

const Button: React.FC<IButtonProps> = ({ text, w, h, pt, pr, pb, pl }) => {
  return (
    <button>
      {/* <div className="bg-primary flex items-center justify-center h-[30px] w-[158px] pt-{pt} rounded-full"> */}
      <div
        className={`bg-primary flex items-center justify-center h-[${h}] w-[${w}] pt-[${pt}] pr-[${pr}] pb-[${pb}] pl-[${pl}] rounded-full`}
      >
        <span className="text-xs font-bold text-white">{text}</span>
      </div>
    </button>
  );
};

export default Button;
