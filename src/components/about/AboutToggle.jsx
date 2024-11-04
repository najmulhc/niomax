const AboutToggleBtn = ({ children, activeBar, value, setActiveBar }) => {
  return (
    <button
      onClick={() => setActiveBar(value)}
      className={`text-[##333333] ${
        activeBar && "bg-red text-white"
      } px-4 py-[0.375rem] text-lg font-roboto`}
    >
      {children}
    </button>
  );
};

export default AboutToggleBtn;
