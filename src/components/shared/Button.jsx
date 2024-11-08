const Button = ({ href, children, onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        className="uppercase bg-yellow md:py-4 md:px-6 px-[.85rem] py-[1.275rem] text-btn-text md:text-lg text-[.95rem] font-roboto font-bold"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className="uppercase bg-yellow md:py-4 md:px-6 px-[.85rem] py-[1.275rem] text-btn-text md:text-lg text-[.95rem] font-roboto font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
