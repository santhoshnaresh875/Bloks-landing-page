const Card = ({ imgUrl, text, subText }) => {
  return (
    <div className="w-[400px] h-[400px] bg-neutral-900 m-4 rounded-lg border border-neutral-700 flex flex-col items-center justify-evenly p-8">
      <img className="w-[86px] h-[86px]" src={imgUrl} alt={text} />
      <h1 className="text-bold w-fit text-3xl text-center">{text}</h1>
      <span className="text-neutral-500 w-fit text-sm text-center">{subText}</span>
    </div>
  );
};

export default Card;
