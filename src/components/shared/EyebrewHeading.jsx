

const EyebrewHeading = ({ children }) => {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="w-[10px] h-[10px] bg-red"></div>
      <h4 className="font-robot font-[700] md:text-xl text-md text-red">
        {children}
      </h4>
    </div>
  );
};

export default EyebrewHeading;
